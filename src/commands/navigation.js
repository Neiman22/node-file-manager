import { dirname, join } from 'path';
import { homedir } from 'os';
import { readdir, stat } from 'fs/promises';

export const goUpperDir = () => {
  const currentDir = process.cwd();
  const parentDir = dirname(currentDir);
  if (currentDir === homedir()) {
    console.log('You are already in the root folder');
  } else {
    process.chdir(parentDir);
  }
}

export const goToDir = (newDir) => {
  try {
    process.chdir(newDir);
  } catch (error) {
    console.error('Invalid input');
  }
}

export const printListOfFiles = async () => {
  const currentDir = process.cwd();
  try {
    const list = await readdir(currentDir);
    const fileList = [];
    const dirList = [];

    for (const elem of list) {
      const filePath = join(currentDir, elem);
      const fileInfo = stat(filePath);
      (await fileInfo).isDirectory() ? dirList.push(elem) : fileList.push(elem);
    }

    displayTable(dirList, fileList)
  } catch (err) {
    console.error('Operation failed');
  }
}

const displayTable = (arrFolders, arrFiles) => {
  console.log('-----------------------------------------------------------------');
  console.log('| Index  |               Name               |         Type      |');
  console.log('-----------------------------------------------------------------');

  let n = 1;
  arrFolders.forEach((elem) => {
    const paddedIndex = String(n).padEnd(6);
    const paddedFolder = elem.padEnd(32);
    console.log(`| ${paddedIndex} | ${paddedFolder} |     Directory     |`);
    console.log('-----------------------------------------------------------------');
    n++;
  });
  arrFiles.forEach((elem) => {
    const paddedIndex = String(n).padEnd(6);
    const paddedFile = elem.padEnd(32);
    console.log(`| ${paddedIndex} | ${paddedFile} |       File        |`);
    console.log('-----------------------------------------------------------------');
    n++;
  });
}