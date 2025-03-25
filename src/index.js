import { getYnab } from "./addMemos";
import { addMemos } from "./addMemos";
import { registerOrder } from "./registerOrder";

// Helper function to read a ReadableStream into a string
async function readStreamToString(stream) {
  const reader = stream.getReader();
  const chunks = [];

  // Read all chunks from the stream
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  // Concatenate chunks and decode as text
  const allChunks = new Uint8Array(
    chunks.reduce((acc, chunk) => acc + chunk.length, 0)
  );

  let position = 0;
  for (const chunk of chunks) {
    allChunks.set(chunk, position);
    position += chunk.length;
  }

  const decoder = new TextDecoder();
  return decoder.decode(allChunks);
}

export default {
  async scheduled(controller, env, ctx) {
    console.log("Cron triggered");
    await addMemos(getYnab(env), env);
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle different routes
    if (request.method === "POST" && path === "/api/register-order") {
      try {
        // Process email content submitted via HTTP
        const emailText = await request.text();
        return await registerOrder(emailText, env);
      } catch (error) {
        return new Response("Error processing request: " + error.message, {
          status: 500,
        });
      }
    } else if (request.method === "POST" && path === "/api/add-memos") {
      try {
        // Trigger adding memos to YNAB transactions
        await addMemos(getYnab(env), env);
        return new Response("Memos added successfully", { status: 200 });
      } catch (error) {
        return new Response("Error adding memos: " + error.message, {
          status: 500,
        });
      }
    } else if (request.method === "POST" && path === "/api/get-transactions") {
      try {
        // Trigger adding memos to YNAB transactions
        const response = await getYnab(env).transactions.getTransactions(
          env.BUDGET_ID,
          undefined,
          "unapproved"
        );
        return new Response(JSON.stringify(response.data), { status: 200 });
      } catch (error) {
        return new Response("Error getting transactions: " + error.message, {
          status: 500,
        });
      }
    } else {
      // Default response for unhandled routes
      return new Response("Not found", { status: 404 });
    }
  },

  async email(message, env, ctx) {
    console.log("Email received from:", message.from);
    console.log("Email subject:", message.headers.get("subject"));

    try {
      // Get email text content by reading the stream
      const emailText = await readStreamToString(message.raw);

      // Log a snippet of the email for debugging
      console.log("Email preview (first 500 chars):");
      console.log(emailText.substring(0, 500));
      console.log("... [truncated] ...");

      // Log the full email content for complete example
      console.log("FULL EMAIL CONTENT START");
      console.log(emailText);
      console.log("FULL EMAIL CONTENT END");

      // Process the email
      await registerOrder(emailText, env);
    } catch (error) {
      console.error("Error processing email:", error);
    }
  },
};
