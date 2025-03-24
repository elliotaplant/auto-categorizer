import { getYnab } from "./addMemos";
import { addMemos } from "./addMemos";
import { registerOrder } from "./registerOrder";

export default {
  async scheduled(controller, env, ctx) {
    console.log("Cron triggered");
    await addMemos(getYnab(env));
  },

  async fetch() {
    console.log("hello world");
    // if post to add email
    //    body should be an email content
    //    registerOrder
    // if post to add memos
    //    addMemosToAmazonTransactions();
    // else
    //    404
    return new Response("Hello world", { status: 200 });
  },

  async email(message, env, ctx) {
    // Get email text content
    const emailText = await message.text();
    await registerOrder(emailText);
  },
};
