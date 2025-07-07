// File: discord-example-app/src/interactions/commandHandlers/translate.js
import { InteractionResponseType } from 'discord-interactions';


export async function handleTranslateCommand(req, res, data) {
  const { options } = data;

  const text = options.find(o => o.name === 'text')?.value;
  const target = options.find(o => o.name === 'target')?.value;
  const source = options.find(o => o.name === 'source')?.value;

  let responseStr = '';
  if (!text || !target || !source) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: '❌ Please provide text, source, and target languages.' }
    });
  }
  try {
    const resLibre = await fetch("https://translate.argosopentech.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const translationData = await resLibre.json(); // Renamed 'data' to 'translationData'

    console.log(translationData.translatedText);

    if (translationData && translationData.translatedText) {
      responseStr = `💱 ${translationData.translatedText}`;
    } else {
      responseStr = '❌ Translation failed.';
    }

  } catch (error) {
    console.error('API error:', error);
    responseStr = '❌ Could not perform translation.';
  }

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: responseStr,
    },
  });
}