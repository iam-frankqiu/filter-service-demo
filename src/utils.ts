import { readdir } from 'node:fs/promises';
import { join } from 'path';

export async function readPackageInfo() {
  const files = await readdir(join(__dirname, './../packages'));
  //   const results = await Promise.all(
  //     files.map(async (file) => {
  //       const filePath = path.join('packages', file);
  //       const stats = await fs.promises.stat(filePath);
  //       return {
  //         name: file,
  //       };
  //     }),
  //   );
  return Array.from(
    new Set(files.map((item: string) => item.split('.').shift())),
  );
}
