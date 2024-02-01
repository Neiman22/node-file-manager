import { currentlyPath } from "./index.js";
import { goToDir, goUpperDir, printListOfFiles } from "./commands/nav_opreation.js";
import { readFile, createFile, renameFile, copyFile, moveFile, removeFile } from "./commands/files_operation.js";
import { osOperation } from "./commands/os_operation.js";
import { calculationHash } from "./commands/hash_operation.js";
import { compressFile } from "./commands/zlib_operation.js";

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
  os: osOperation,
  hash: calculationHash,
  compress: compressFile,
}

export const commandHandler = async (input) => {
  const [command, ...args] = input.split(' ');
  const handler = commandMap[command];

  if (handler) {
    await handler(...args);
  } else {
    console.error('Invalid command');
  }
  currentlyPath();
} 