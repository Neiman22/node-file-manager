import { commandHandler } from './commandHandler.js';
import { homedir } from 'os';

//Welcome to the File Manager, Username!
const userName = process.argv[2].split('=')[1];
console.log(`Welcome to the File Manager, ${userName}!`);

//Thank you for using File Manager, Username, goodbye!
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${userName}, goodbye`);
    process.exit();
  } else {
    commandHandler(input);
  }
})

process.on('SIGINT', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye`);
  process.exit();
})

//You are currently in path_to_working_directory
process.chdir(homedir());
export const currentlyPath = () => {
  const currentDir = process.cwd();
  console.log(`You are currently in ${currentDir}`);
}
currentlyPath();