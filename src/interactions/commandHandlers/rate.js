// File: discord-example-app/src/interactions/commandHandlers/rate.js
import { InteractionResponseType } from 'discord-interactions';


export async function handleRateCommand(req, res, data) {
  const { options } = data; // Get options directly from data

  const from = options.find(o => o.name === 'from')?.value.toUpperCase();
  const to = options.find(o => o.name === 'to')?.value.toUpperCase();
  const amount = options.find(o => o.name === 'amount')?.value || 1;

  let responseStr = '';

  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const apiData = await response.json(); // Renamed 'data' to 'apiData' to avoid conflict

    const rateFrom = apiData.rates[from];
    const rateTo = apiData.rates[to];

    if (!rateFrom || !rateTo) {
      responseStr = `❌ Invalid currency code: ${from} or ${to}`;
    } else {
      const usdValue = amount / rateFrom;
      const finalValue = usdValue * rateTo;

      responseStr = `💱 ${amount} ${from} = ${finalValue.toFixed(4)} ${to}`;
    }

  } catch (error) {
    console.error('API error:', error);
    responseStr = '❌ Could not fetch exchange rates.';
  }

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: responseStr,
    },
  });
}