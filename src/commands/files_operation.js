import { createReadStream, createWriteStream } from 'fs';
import { access, rename, rm, writeFile } from 'fs/promises';
import { join } from 'path';

export const readFile = async (fileName) => {
  try {
    await access(fileName);
    const readStream = createReadStream(fileName, 'utf-8');
    readStream.on('data', (chunk) => console.log(chunk))
    readStream.on("end", () => console.log(`File ${fileName} readed`));
    readStream.on("error", (err) => console.error('Operation failed', err.message));
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const createFile = async (fileName) => {
  try {
    await access(fileName);
    console.error(`File ${fileName} already exists`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await writeFile(fileName, '', {flag: 'wx'});
        console.log(`File ${fileName} created`);
      } catch (err) {
        console.error('Operation failed', err.message);
      } 
    }
  }
}

export const renameFile = async (oldFileName, newFileName) => {
  try {
    await access(oldFileName);
    await rename(oldFileName, newFileName);
    console.log(`File ${oldFileName} renamed to ${newFileName}`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}

export const copyFile = async (fileName, newDir) => {
  const newFilePath = join(newDir, fileName)
  try {
    await access(fileName);
    await access(newDir);
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
    await access(fileName);
    await access(newDir);
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
    await access(fileName);
    await rm(fileName);
    console.log(`File ${fileName} removed`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}