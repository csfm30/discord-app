// File: discord-example-app/src/interactions/componentHandlers/mySelect.js
import { InteractionResponseType } from 'discord-interactions';

export async function handleMySelect(req, res, data) {
  const selectedOption = data.values[0]; //
  const userId = req.body.member.user.id; //

  return res.send({ //
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
    data: { content: `<@${userId}> selected ${selectedOption}` }, //
  });
}