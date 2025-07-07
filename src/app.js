// File: discord-example-app/src/app.js
import 'dotenv/config';
import express from 'express';
import { verifyKeyMiddleware } from 'discord-interactions';
import { routeInteraction } from './interactions/router.js'; // NEW: Import the central interaction router


// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;

// Store for in-progress games. In production, you'd want to use a DB
// This is exported so game.js and componentHandlers can access it
export const activeGames = {};

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 * Parse request body and verifies incoming requests using discord-interactions package
 */
app.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), async function (req, res) {
  // Delegate the actual handling to the router in the interactions/ directory
  return routeInteraction(req, res);
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});