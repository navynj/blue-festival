// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const rootHtml = await render();
const html = template.replace(`<!--root-html-->`, rootHtml);

const filePath = `dist/static/index.html`;
fs.writeFileSync(toAbsolute(filePath), html);
console.log('pre-rendered:', filePath);
