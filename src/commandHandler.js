import { currentlyPath } from "./index.js";
import { goToDir, goUpperDir, printListOfFiles } from "./commands/navigation.js";
import { readFile, createFile, renameFile, copyFile, moveFile, removeFile } from "./commands/files_operation.js";
import { osOperation } from "./commands/os_operation.js";

const commandMap = {
  up: goUpperDir,
  cd: goToDir,
  ls: printListOfFiles,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: removeFile,
  os: osOperation
}

export const commandHandler = async (input) => {
  const [command, ...args] = input.split(' ');
  const handler = commandMap[command];

  if (handler) {
    await handler(...args);
    currentlyPath();
  } else {
    console.error('Invalid command');
  }
} 