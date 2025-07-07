// File: discord-example-app/src/interactions/commandHandlers/challenge.js
import { InteractionResponseType, MessageComponentTypes, ButtonStyleTypes } from 'discord-interactions';
import { activeGames } from '../../app.js'; // Adjust path for activeGames


export async function handleChallengeCommand(req, res, data) {
  const { id, options } = data;
  const context = req.body.context;
  const userId = context === 0 ? req.body.member.user.id : req.body.user.id;
  const objectName = options[0].value; // options[0] is 'object'

  activeGames[id] = {
    id: userId,
    objectName,
  };

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Rock papers scissors challenge from <@${userId}>`,
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.BUTTON,
              custom_id: `accept_button_${req.body.id}`,
              label: 'Accept',
              style: ButtonStyleTypes.PRIMARY,
            },
          ],
        },
      ],
    },
  });
}