import { createReadStream, createWriteStream } from 'fs';
import { rename, rm, writeFile } from 'fs/promises';
import { join } from 'path';

export const readFile = (fileName) => {
  const readStream = createReadStream(fileName, 'utf-8');
  readStream.on('data', (chunk) => console.log(chunk))
  readStream.on("end", () => console.log(`File ${fileName} readed`));
  readStream.on("error", (err) => console.error('Operation failed', err.message));
}

export const createFile = async (fileName) => {
  try {
    await writeFile(fileName, '', {flag: 'wx'});
    console.log(`File ${fileName} created`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const renameFile = async (oldFileName, newFileName) => {
  try {
    await rename(oldFileName, newFileName);
    console.log(`File ${oldFileName} renamed to ${newFileName}`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const copyFile = (fileName, newDir) => {
  const newFilePath = join(newDir, fileName)
  try {
    const input = createReadStream(fileName);
    const output = createWriteStream(newFilePath);
    input.pipe(output);
    console.log(`File ${fileName} copied to ${newDir}`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const moveFile = async (fileName, newDir) => {
  const newFilePath = join(newDir, fileName)
  try {
    const input = createReadStream(fileName);
    const output = createWriteStream(newFilePath);
    input.pipe(output);
    await rm(fileName);
    console.log(`File ${fileName} moved to ${newDir}`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const removeFile = async (fileName) => {
  try {
    await rm(fileName);
    console.log(`File ${fileName} removed`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}