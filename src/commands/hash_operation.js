import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculationHash = (filePath) => {
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => console.log(`Hash of ${filePath} file: ${hash.digest('hex')}`));
  stream.on('error', (error) => console.error(`'Operation failed': ${error.message}`));
}