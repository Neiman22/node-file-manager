import { createReadStream, createWriteStream }from 'fs'
import { pipeline } from 'stream';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

export const compressFile = (filePath, zipPath) => {
  try {
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(zipPath);
    const brotliCompress = createBrotliCompress();
  
    pipeline(readStream, brotliCompress, writeStream, (err) => {
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

export const decompressFile = (zipPath, filePath) => {
  try {
    const readStream = createReadStream(zipPath);
    const writeStream = createWriteStream(filePath);
    const brotliDecompress = createBrotliDecompress();
  
    pipeline(readStream, brotliDecompress, writeStream, (err) => {
      if (err) {
        console.error('Operation failed', err.message);
      } else {
        console.log(`File ${zipPath } decompressed to ${filePath}`);
      }
    });
  } catch (err) {
    console.error('Operation failed', err.message);
  }
}