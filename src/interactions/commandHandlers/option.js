// File: discord-example-app/src/interactions/commandHandlers/option.js
import { InteractionResponseType, MessageComponentTypes } from 'discord-interactions';
import { getShuffledOptions } from '../../game.js'; //


export async function handleOptionCommand(req, res, data) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: 'A message with a select menu', // More descriptive content
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.STRING_SELECT,
              custom_id: 'my_select',
              options: getShuffledOptions(),
            },
          ],
        },
      ],
    },
  });
}