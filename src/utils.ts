import { readdir } from 'node:fs/promises';
import { join } from 'path';

export async function readPackageInfo() {
  const files = await readdir(join(__dirname, './../packages'));
  return Array.from(
    new Set(files.map((item: string) => item.split('.').shift())),
  );
}
