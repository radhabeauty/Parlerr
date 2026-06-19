const fs = require('fs');
const path = require('path');

const clientDir = path.resolve(__dirname, '../dist/client');
if (!fs.existsSync(clientDir)) {
  console.error('dist/client not found — run `npm run build` first');
  process.exit(1);
}

const assetsDir = path.join(clientDir, 'assets');
const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];

// find main JS and CSS
const jsFile = assetFiles.find((f) => /^index-.*\.js$/.test(f)) || assetFiles.find((f)=>/index.*\.js$/.test(f)) || assetFiles.find((f)=>/\.js$/.test(f));
const cssFile = assetFiles.find((f) => /^styles-.*\.css$/.test(f)) || assetFiles.find((f)=>/\.css$/.test(f));

const title = "Sister's Beauty Hub — Bridal Makeup & Mehndi in Jabalpur";

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="Premium bridal makeup, party glam, and mehndi artistry in Jabalpur. Home service available." />
    <title>${title}</title>
    ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}">` : ''}
    <base href="/Parlerr/">
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="./assets/${jsFile}"></script>` : ''}
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), indexHtml);
console.log('Wrote', path.join(clientDir, 'index.html'));
