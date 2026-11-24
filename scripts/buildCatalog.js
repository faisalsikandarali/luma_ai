import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/categories');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to escape backticks in code strings
const cleanCode = (str) => str.replace(/`/g, '\\`').replace(/\${/g, '\\${');

console.log('Script initialized for building 50 items per category');
