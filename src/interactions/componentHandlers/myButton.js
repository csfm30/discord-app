// File: discord-example-app/src/interactions/componentHandlers/myButton.js
import { InteractionResponseType } from 'discord-interactions';

export async function handleMyButton(req, res, data) {
  const userId = req.body.member.user.id; //
  return res.send({ //
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
    data: { content: `<@${userId}> clicked the button` }, //
  });
}