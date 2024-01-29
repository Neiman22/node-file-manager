import { createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export const readFile = (fileName) => {
  const readStream = createReadStream(fileName, 'utf-8');
  readStream.on('data', (chunk) => console.log(chunk))
  readStream.on("end", () => console.log(`File ${fileName} readed`));
  readStream.on("error", (err) => console.error('Operation failed', err.message));
}

export const createFile = async (fileName) => {
  const currentDir = process.cwd();
  const createdFile = join(currentDir, fileName);
  try {
    await writeFile(createdFile, '', {flag: 'wx'});
    console.log(`File ${fileName} created`);
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}