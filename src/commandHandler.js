import { currentlyPath } from "./index.js";
import { goToDir, goUpperDir, printListOfFiles } from "./commands/navigation.js";
import { readFile, createFile, renameFile, copyFile, moveFile } from "./commands/files_operation.js";

const commandMap = {
  up: goUpperDir,
  cd: goToDir,
  ls: printListOfFiles,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
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