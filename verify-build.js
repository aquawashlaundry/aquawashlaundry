// Script to verify the build output
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const indexHtmlPath = join(distPath, 'index.html');

if (!existsSync(indexHtmlPath)) {
  console.error('❌ dist/index.html does not exist!');
  process.exit(1);
}

const html = readFileSync(indexHtmlPath, 'utf-8');

// Check for source file references (should not have /src/)
if (html.includes('/src/')) {
  console.error('❌ index.html contains source file references!');
  console.error('This should be the built version, not the source.');
  process.exit(1);
}

// Check for module script tag
if (!html.includes('type="module"')) {
  console.error('❌ index.html missing module script tag!');
  process.exit(1);
}

// Check for .nojekyll
const nojekyllPath = join(distPath, '.nojekyll');
if (!existsSync(nojekyllPath)) {
  console.warn('⚠️  .nojekyll file missing (creating it...)');
  const { writeFileSync } = require('fs');
  writeFileSync(nojekyllPath, '');
}

console.log('✅ Build verification passed!');
console.log('✅ index.html is correct');
console.log('✅ .nojekyll file exists');

