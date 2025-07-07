// File: discord-example-app/src/commands.js
import 'dotenv/config'; //
import { getRPSChoices } from './game.js'; //
import { capitalize, InstallGlobalCommands } from './utils.js'; //


// Get the game choices from game.js
function createCommandChoices() { //
  const choices = getRPSChoices(); //
  const commandChoices = []; //

  for (let choice of choices) { //
    commandChoices.push({ //
      name: capitalize(choice), //
      value: choice.toLowerCase(), //
    }); //

  } //

  return commandChoices; //
} //

// Simple test command
const TEST_COMMAND = { //
  name: 'test', //
  description: 'Basic command', //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 1, 2], //
}; //

const MODAL_COMMAND = { //
  name: 'modal', //
  description: 'Basic command', //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 1, 2], //
}; //

// Button command
const BUTTON_COMMAND = { //
  name: 'button', //
  description: 'Button command', //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 1, 2], //
}; //

const OPTION_COMMAND = { //
  name: 'option', //
  description: 'Button command', //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 1, 2], //
}; //

// Command containing options
const CHALLENGE_COMMAND = { //
  name: 'challenge', //
  description: 'Challenge to a match of rock paper scissors', //
  options: [ //
    { //
      type: 3, //
      name: 'object', //
      description: 'Pick your object', //
      required: true, //
      choices: createCommandChoices(), //
    }, //
  ], //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 2], //
}; //

const SEND_COMMAND = { //
  name: 'send', //
  description: 'Call an external API and return data', //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 1, 2], //
}; //

// Command containing options
const RATE_COMMAND = { //
  name: 'rate', //
  description: 'rate currency that you want to exchange', //
  options: [ //
    { //
      type: 3, //
      name: 'from', //
      description: 'Pick your currency', //
      required: true, //
      choices: [ //
        { //
          name: 'USD', //
          value: 'USD', //
        }, //
        { //
          name: 'JPY', //
          value: 'JPY', //
        }, //
        { //
          name: 'THB', //
          value: 'THB', //
        }, //
        { //
          name: 'CNY', //
          value: 'CNY', //
        }, //
        { //
          name: 'KRW', //
          value: 'KRW', //
        }, //
        { //
          name: 'HKD', //
          value: 'HKD', //
        }, //
        { //
          name: 'EUR', //
          value: 'EUR', //
        }, //
        { //
          name: 'TWD', //
          value: 'TWD', //
        }, //
      ], //
    }, //
    { //
      type: 3, //
      name: 'to', //
      description: 'Pick your currency', //
      required: true, //
      choices: [ //
        { //
          name: 'USD', //
          value: 'USD', //
        }, //
        { //
          name: 'JPY', //
          value: 'JPY', //
        }, //
        { //
          name: 'THB', //
          value: 'THB', //
        }, //
        { //
          name: 'CNY', //
          value: 'CNY', //
        }, //
        { //
          name: 'KRW', //
          value: 'KRW', //
        }, //
        { //
          name: 'HKD', //
          value: 'HKD', //
        }, //
        { //
          name: 'EUR', //
          value: 'EUR', //
        }, //
        { //
          name: 'TWD', //
          value: 'TWD', //
        }, //
      ], //
    }, //
    { //
      type: 10, //
      name: 'amount', //
      description: 'Amount to convert', //
      required: false, //
    }, //
  ], //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 2], //
}; //

const TRANSLATE_COMMAND = { //
  name: 'translate', //
  description: 'translate text to thai', //
  options: [ //
    { //
      type: 3, //
      name: 'source', //
      description: 'Pick your object', //
      required: true, //
      choices: [ //
        { //
          name: 'th', //
          value: 'th', //
        }, //
        { //
          name: 'en', //
          value: 'en', //
        }, //
      ] //
    }, //
    { //
      type: 3, //
      name: 'target', //
      description: 'Pick your object', //
      required: true, //
      choices: [ //
        { //
          name: 'th', //
          value: 'th', //
        }, //
        { //
          name: 'en', //
          value: 'en', //
        }, //
      ] //
    }, //
    { //
      type: 3, //
      name: 'text', //
      description: 'Amount to convert', //
      required: false, //
    }, //
  ], //
  type: 1, //
  integration_types: [0, 1], //
  contexts: [0, 2], //
}; //


const ALL_COMMANDS = [TEST_COMMAND, BUTTON_COMMAND, CHALLENGE_COMMAND, SEND_COMMAND, RATE_COMMAND, TRANSLATE_COMMAND, OPTION_COMMAND, MODAL_COMMAND ]; //

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS); //