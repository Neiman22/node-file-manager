import { createReadStream } from 'fs';
import { rename, writeFile } from 'fs/promises';

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