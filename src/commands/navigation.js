import { dirname } from 'path';
import { homedir } from 'os';

export const goUpperDir = () => {
  const currentDir = process.cwd();
  const parentDir = dirname(currentDir);
  if (currentDir === homedir()) {
    console.log('You are already in the root folder');
  } else {
    process.chdir(parentDir);
  }
}

export const goToDir = () => {

}

export const printInConsole = () => {
  
}