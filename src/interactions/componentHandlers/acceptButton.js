// File: discord-example-app/src/interactions/componentHandlers/acceptButton.js
import {
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
} from 'discord-interactions';
import { DiscordRequest } from '../../utils.js'; //
import { getShuffledOptions } from '../../game.js'; //
import { activeGames } from '../../app.js'; //

export async function handleAcceptButton(req, res, data) {
  const componentId = data.custom_id; // For consistency, though it's the custom_id passed here
  const gameId = componentId.replace('accept_button_', ''); //

  const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}/messages/${req.body.message.id}`; //
  try { //
    await res.send({ //
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
      data: { //
        content: 'What is your object of choice?', //
        flags: InteractionResponseFlags.EPHEMERAL, //
        components: [ //
          { //
            type: MessageComponentTypes.ACTION_ROW, //
            components: [ //
              { //
                type: MessageComponentTypes.STRING_SELECT, //
                custom_id: `select_choice_${gameId}`, //
                options: getShuffledOptions(), //
              },
            ],
          },
        ],
      },
    });
    // Delete previous message
    await DiscordRequest(endpoint, { method: 'DELETE' }); //
  } catch (err) { //
    console.error('Error sending message (accept_button):', err); //
    return res.send({ //
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
      data: { content: '❌ An error occurred trying to accept the challenge.' }, //
    });
  }
}