// File: discord-example-app/src/interactions/modalHandlers/index.js
import { handleMyModal } from './myModal.js'; // NEW: Import individual modal handlers


/**
 * Dispatches MODAL_SUBMIT interactions to the correct handler function.
 */
export async function handleModal(req, res, data) {
  const modalId = data.custom_id;

  if (modalId === 'my_modal') {
    return handleMyModal(req, res, data);
  }

  console.error('unknown modal submission', modalId);
  return res.status(400).json({ error: 'unknown modal submission' });
}