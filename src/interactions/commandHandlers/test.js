// File: discord-example-app/src/interactions/commandHandlers/test.js
import { InteractionResponseType } from 'discord-interactions';
import { getRandomEmoji } from '../../utils.js'; // Adjust path


export async function handleTestCommand(req, res, data) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `hello world ${getRandomEmoji()}`,
    },
  });
}