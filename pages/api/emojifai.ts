// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { WebClient, LogLevel } from "@slack/web-api";
import OpenAI from "openai";

const findEmojiNames = (text: string) => {
  const numEmojis = Math.floor(text.split("").filter(c => c === ":").length / 2);
  const split = text.split(":");
  const emojiNames = [];
  for (let i = 0; i < split.length; i++) {
    if (i % 2 !== 0 && emojiNames.length < numEmojis && split[i]) {
      emojiNames.push(split[i]);
    }
  }
  return emojiNames;
};

const emojifai = (req: NextApiRequest, res: NextApiResponse) => {
  console.info("request", req.body);

  if (req.method !== "POST") {
    res.statusCode = 200;
    return res.json({ message: "helo" });
  }

  // if (req.body.type === "url_verification") {
  //   res.statusCode = 200;
  //   res.json({ challenge: req.body.challenge });
  //   return;
  // }
  // else if (req.body.type === "event_callback") {
  //   if (!(global as any).processed) {
  //     (global as any).processed = {};
  //   }

  //   // const client = new WebClient(process.env.EMOJIFAI_SLACK_OAUTH_TOKEN, {
  //   //   logLevel: LogLevel.DEBUG
  //   // });
  //   // client.auth.test().then(response => {
  //   //   console.info("auth test", response);
  //   //   res.status(200);
  //   //   res.json(response);
  //   // });

  //   const event = req.body.event;
  //   if ((global as any).processed[event.client_msg_id] || event.type !== "message" || event.subtype === "message_changed" || !event.text || event.bot_profile) {
  //     res.statusCode = 204;
  //     res.end();
  //     return;
  //   }

  //   (global as any).processed[event.client_msg_id] = true;

  //   const emojiNames = findEmojiNames(event.text);
  //   if (!emojiNames.length) {
  //     res.statusCode = 204;
  //     res.end();
  //     return;
  //   }

  //   const firstEmoji = emojiNames[0]
  //     .replaceAll("-", " ")
  //     .replaceAll("_", " ");

  //   const openai = new OpenAI({
  //     organization: process.env.OPENAI_ORG_ID,
  //     project: process.env.OPENAI_PROJECT_ID
  //   });

  //   const prompt = `
  //       You create emojis based on user input.
  //       If the user input includes something unsafe, replace it with something safe.
  //       Create a single emoji based on this phrase: ${firstEmoji}
  //       `;
  //   console.info("Generating image from prompt: " + prompt);

  //   openai.images.generate({
  //     model: "dall-e-2",
  //     size: "256x256",
  //     prompt
  //   }).then(openAiResponse => {
  //     console.info("open ai response", openAiResponse);

  //     if (openAiResponse.data?.length) {
  //       const imgUrl = openAiResponse.data[0].url;

  //       const client = new WebClient(process.env.EMOJIFAI_SLACK_OAUTH_TOKEN, {
  //         logLevel: LogLevel.DEBUG
  //       });

  //       client.chat.postMessage({
  //         channel: event.channel,
  //         text: imgUrl
  //       }).then(chatResponse => {
  //         console.info("slack chat response", chatResponse);
  //         res.statusCode = 200;
  //         res.end();
  //       }).catch(chatError => {
  //         console.error(chatError);
  //         res.statusCode = 500;
  //         res.json({ error: chatError });
  //       });
  //     }
  //   }).catch(openAiError => {
  //     console.error(openAiError);
  //     res.statusCode = 500;
  //     res.json({ error: openAiError });
  //   });
  // }
};

export default emojifai;
export const maxDuration = 60;
