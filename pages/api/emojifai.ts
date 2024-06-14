// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { WebClient, LogLevel } from "@slack/web-api";
import OpenAI from "openai";
import { error } from "console";

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
  if (req.method !== "POST") {
    res.statusCode = 200;
    return res.json({ message: "helo" });
  }

  if (req.body.type === "url_verification") {
    res.statusCode = 200;
    res.json({ challenge: req.body.challenge });
    return;
  }
  else if (req.body.type === "event_callback") {
    if (!(global as any).processed) {
      (global as any).processed = {};
    }

    const event = req.body.event;
    console.info(event);
    if ((global as any).processed[event.client_msg_id] || event.type !== "message" || event.subtype === "message_changed" || !event.text) {
      res.statusCode = 204;
      res.end();
      return;
    }

    (global as any).processed[event.client_msg_id] = true;

    const emojiNames = findEmojiNames(event.text);
    if (emojiNames.length > 0) {
      const client = new WebClient("xoxb-your-token", {
        // LogLevel can be imported and used to make debugging simpler
        logLevel: LogLevel.DEBUG
      });

      const firstEmoji = emojiNames[0]
        .replaceAll("-", " ")
        .replaceAll("_", " ");

      const openai = new OpenAI({
        organization: process.env.OPENAI_ORG_ID,
        project: process.env.OPENAI_PROJECT_ID
      });

      openai.images.generate({
        model: "dall-e-2",
        size: "256x256",
        prompt: `
        You create emojis based on user input.
        If the user input includes something unsafe, replace it with something safe.
        Do not include text in the image.
        Create a single emoji based on this phrase: ${firstEmoji}
        `
      }).then(openAiResponse => {
        console.info(openAiResponse);

        if (openAiResponse.data?.length) {
          const imgUrl = openAiResponse.data[0].url;

          client.chat.postMessage({
            token: process.env.EMOJIFAI_SLACK_OAUTH_TOKEN,
            channel: event.channel,
            text: imgUrl
          }).then(chatResponse => {
            console.info(chatResponse);
          }).catch(chatError => {
            console.error(chatError);
            res.statusCode = 500;
            res.json({ error: chatError });
          });
        }

        res.statusCode = 200;
        res.end();
      }).catch(openAiError => {
        console.error(openAiError);
        res.statusCode = 500;
        res.json({ error: openAiError });
      });
    }
  }
};

export default emojifai;