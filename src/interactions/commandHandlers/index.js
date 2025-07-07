// File: discord-example-app/src/interactions/commandHandlers/index.js
import { InteractionResponseType } from 'discord-interactions';
import { handleTestCommand } from './test.js';         // NEW: Import individual command handlers
import { handleButtonCommand } from './button.js';
import { handleChallengeCommand } from './challenge.js';
import { handleSendCommand } from './send.js';
import { handleRateCommand } from './rate.js';
import { handleTranslateCommand } from './translate.js';
import { handleOptionCommand } from './option.js';
import { handleModalCommand } from './modal.js';


/**
 * Dispatches APPLICATION_COMMAND interactions to the correct handler function.
 */
export async function handleCommand(req, res, data) {
  const { name } = data; // Command name

  switch (name) {
    case 'test':
      return handleTestCommand(req, res, data);
    case 'button':
      return handleButtonCommand(req, res, data);
    case 'challenge':
      return handleChallengeCommand(req, res, data);
    case 'send':
      return handleSendCommand(req, res, data);
    case 'rate':
      return handleRateCommand(req, res, data);
    case 'translate':
      return handleTranslateCommand(req, res, data);
    case 'option':
      return handleOptionCommand(req, res, data);
    case 'modal':
      return handleModalCommand(req, res, data);
    default:
      console.error(`unknown command: ${name}`);
      return res.status(400).json({ error: 'unknown command' });
  }
}