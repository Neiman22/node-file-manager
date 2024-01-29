import { createReadStream } from 'fs';

export const readFile = (file) => {
  const readStream = createReadStream(file, 'utf-8');

  readStream.on('data', (chunk) => console.log(chunk))
  readStream.on("end", () => console.log("File read"));
  readStream.on("error", (error) => console.log('Operation failed', error.message));
}