// File: discord-example-app/src/interactions/componentHandlers/index.js
import { handleAcceptButton } from './acceptButton.js'; // NEW: Import individual component handlers
import { handleMyButton } from './myButton.js';
import { handleSelectChoice } from './selectChoice.js';
import { handleMySelect } from './mySelect.js'; // Assuming 'my_select' is handled here


/**
 * Dispatches MESSAGE_COMPONENT interactions to the correct handler function.
 */
export async function handleComponent(req, res, data) {
  const componentId = data.custom_id;

  if (componentId.startsWith('accept_button_')) {
    return handleAcceptButton(req, res, data);
  } else if (componentId.startsWith('select_choice_')) {
    return handleSelectChoice(req, res, data);
  } else if (componentId === 'my_button') {
    return handleMyButton(req, res, data);
  } else if (componentId === 'my_select') {
    return handleMySelect(req, res, data);
  }

  console.error('unknown component interaction', componentId);
  return res.status(400).json({ error: 'unknown component interaction' });
}