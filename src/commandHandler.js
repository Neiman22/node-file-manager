import { currentlyPath } from "./index.js";
import { goToDir, goUpperDir, printListOfFiles } from "./commands/navigation.js";

const commandMap = {
  up: goUpperDir,
  cd: goToDir,
  ls: printListOfFiles,
}

export const commandHandler = (input) => {
  const [command, ...args] = input.split(' ');
  const handler = commandMap[command];

  if (handler) {
    handler(...args);
    currentlyPath();
  } else {
    console.error('Invalid command');
  }
} 