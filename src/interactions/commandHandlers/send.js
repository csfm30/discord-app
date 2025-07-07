// File: discord-example-app/src/interactions/commandHandlers/send.js
import { InteractionResponseType } from 'discord-interactions';
import { getRandomEmoji } from '../../utils.js'; //
// axios is not used directly in this refined `send` command, but was in original.
// If you need axios, ensure it's imported.
// import axios from 'axios';


export async function handleSendCommand(req, res, data) {
  let responseStr = 'Hello, world!';
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();

    const thbRate = data.rates['THB'];
    const jpyRate = data.rates['JPY'];

    responseStr = `Exchange rates relative to USD:\n- THB: ${thbRate}\n- JPY: ${jpyRate}`;
  } catch (error) {
    console.error('API Error:', error);
    responseStr = '❌ Could not fetch exchange rates.';
  }
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: responseStr + `${getRandomEmoji()}`,
    },
  });
}