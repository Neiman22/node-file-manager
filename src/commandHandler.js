import { goToDir, goUpperDir, printInConsole } from "./commands/navigation.js";

const commandMap = {
  up: goUpperDir,
  cd: goToDir,
  ls: printInConsole,
}

export const commandHandler = (input) => {
  const [command, ...args] = input.split(' ');
  const handler = commandMap[command];

  if (handler) {
    handler(...args);
  } else {
    console.error('Invalid input');
  }
} 