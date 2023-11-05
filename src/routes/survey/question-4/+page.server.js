/** @type {import('./$types').Actions} */
import { v4 as uuidv4 } from "uuid";
import { db } from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  submit: async (event) => {
    const responses = await event.request.formData();

    const response1 = responses.get("response1");
    const response2 = responses.get("response2");
    const response3 = responses.get("response3");
    const userPreference = responses.get("response4");

    async function createResponse() {
      await db.responses.create({
        data: {
          id: uuidv4(),
          response1: response1,
          response2: response2 || "no response",
          response3: response3 || "no response",
          userPreference: userPreference,
        },
      });
    }
    createResponse()
      .then(async () => {
        await db.$disconnect();
      })
      .catch(async (e) => {
        console.log(e);
        await db.$disconnect();
        process.exit(1);
      });
    console.log("success");
    throw redirect(303, "/survey/thank-you");
  },
};
