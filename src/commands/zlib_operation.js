import { createReadStream, createWriteStream }from 'fs'
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';

export const compressFile = (filePath, zipPath) => {
  try {
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(zipPath);
    const brotli = createBrotliCompress();
  
    pipeline(readStream, brotli, writeStream, (err) => {
      if (err) {
        console.error('Operation failed', err.message);
      } else {
        console.log(`File ${filePath} compressed to ${zipPath}`);
      }
    });
  } catch (err) {
    console.error('Operation failed', err.message);
  }

}