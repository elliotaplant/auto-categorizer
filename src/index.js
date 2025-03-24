import { getYnab } from "./addMemos";
import { addMemos } from "./addMemos";
import { registerOrder } from "./registerOrder";

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
        return new Response("Error processing request: " + error.message, { status: 500 });
      }
    } 
    else if (request.method === "POST" && path === "/api/add-memos") {
      try {
        // Trigger adding memos to YNAB transactions
        await addMemos(getYnab(env), env);
        return new Response("Memos added successfully", { status: 200 });
      } catch (error) {
        return new Response("Error adding memos: " + error.message, { status: 500 });
      }
    }
    else if (request.method === "GET" && path === "/api/orders") {
      try {
        // List all orders from the database
        if (!env.DB) {
          return new Response("Database not available", { status: 503 });
        }
        
        const { results } = await env.DB.prepare(
          "SELECT * FROM amazon_orders ORDER BY created_at DESC"
        ).all();
        
        return new Response(JSON.stringify({ orders: results }), { 
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response("Error fetching orders: " + error.message, { status: 500 });
      }
    }
    else {
      // Default response for unhandled routes
      return new Response("Not found", { status: 404 });
    }
  },

  async email(message, env, ctx) {
    // Get email text content
    const emailText = await message.text();
    await registerOrder(emailText, env);
  },
};
