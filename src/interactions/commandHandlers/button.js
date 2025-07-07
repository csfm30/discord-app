// File: discord-example-app/src/interactions/commandHandlers/button.js
import { InteractionResponseType, MessageComponentTypes, ButtonStyleTypes } from 'discord-interactions';

export async function handleButtonCommand(req, res, data) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: 'A message with a button',
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.BUTTON,
              custom_id: 'my_button',
              label: 'Click',
              style: ButtonStyleTypes.PRIMARY,
            },
          ],
        },
      ],
    },
  });
}