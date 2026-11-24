import fs from 'fs';
import path from 'path';

const targetDir = path.resolve('src/data/categories');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Categories directory ready:', targetDir);
