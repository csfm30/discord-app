// File: discord-example-app/src/interactions/modalHandlers/myModal.js
import { InteractionResponseType } from 'discord-interactions';


export async function handleMyModal(req, res, data) {
  const userId = req.body.member.user.id; // User ID of member who filled out modal

  let modalValues = '';
  // Get value of text inputs
  for (let action of data.components) {
    let inputComponent = action.components[0]; // Assuming one input per action row
    modalValues += `${inputComponent.custom_id}: ${inputComponent.value}\n`;
  }

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `<@${userId}> typed the following (in a modal):\n\n${modalValues}`,
    },
  });
}