// File: discord-example-app/src/interactions/commandHandlers/modal.js
import { InteractionResponseType, MessageComponentTypes } from 'discord-interactions';


export async function handleModalCommand(req, res, data) {
  return res.send({
    type: InteractionResponseType.MODAL,
    data: {
      custom_id: 'my_modal',
      title: 'Modal title',
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.INPUT_TEXT,
              custom_id: 'my_text',
              style: 1, // Short
              label: 'Type some text',
            },
          ],
        },
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.INPUT_TEXT,
              custom_id: 'my_longer_text',
              style: 2, // Paragraph
              label: 'Type some (longer) text',
            },
          ],
        },
      ],
    },
  });
}