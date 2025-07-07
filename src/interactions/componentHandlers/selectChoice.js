// File: discord-example-app/src/interactions/componentHandlers/selectChoice.js
import {
  InteractionResponseType,
} from 'discord-interactions';
import { getRandomEmoji, DiscordRequest } from '../../utils.js'; //
import { getResult } from '../../game.js'; //
import { activeGames } from '../../app.js'; //

export async function handleSelectChoice(req, res, data) {
  const componentId = data.custom_id; //
  const gameId = componentId.replace('select_choice_', ''); //

  if (activeGames[gameId]) { //
    const context = req.body.context; //
    const userId = context === 0 ? req.body.member.user.id : req.body.user.id; //
    const objectName = data.values[0]; //
    const resultStr = getResult(activeGames[gameId], { //
      id: userId, //
      objectName, //
    }); //

    delete activeGames[gameId]; //
    const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}/messages/${req.body.message.id}`; //

    try { //
      await res.send({ //
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
        data: { content: resultStr }, //
      });
      // Update ephemeral message
      await DiscordRequest(endpoint, { //
        method: 'PATCH', //
        body: { //
          content: 'Nice choice ' + getRandomEmoji(), //
          components: [], //
        },
      });
    } catch (err) { //
      console.error('Error sending message:', err); //
      return res.send({ //
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, //
        data: { content: '❌ An error occurred processing your choice.' }, //
      });
    }
  }
}