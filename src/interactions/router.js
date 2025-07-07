// File: discord-example-app/src/interactions/router.js
import {
  InteractionType,
  InteractionResponseType,
} from 'discord-interactions';
import { handleCommand } from './commandHandlers/index.js';     // NEW: Import the command handler index
import { handleComponent } from './componentHandlers/index.js'; // NEW: Import the component handler index
import { handleModal } from './modalHandlers/index.js';         // NEW: Import the modal handler index


/**
 * Main function to route all Discord interactions.
 * Dispatches to specific handlers based on interaction type.
 */
export async function routeInteraction(req, res) {
  const { type, id, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    return handleCommand(req, res, data); // Delegate to command handler
  }

  /**
   * Handle requests from interactive components (buttons, select menus)
   */
  if (type === InteractionType.MESSAGE_COMPONENT) {
    return handleComponent(req, res, data); // Delegate to component handler
  }

  /**
   * Handle modal submissions
   */
  if (type === InteractionType.MODAL_SUBMIT) {
    return handleModal(req, res, data); // Delegate to modal handler
  }

  console.error('unknown interaction type', type);
  return res.status(400).json({ error: 'unknown interaction type' });
}