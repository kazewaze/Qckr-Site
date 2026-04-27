/*
*  ---------------------------
*   Glaze Development Server
*  ---------------------------
*  Run it with: node server.js
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const root = process.cwd();

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let filePath = path.join(root, req.url.split('?')[0]);

  if (req.url === '/' || path.extname(filePath) === '') {
    filePath = path.join(root, 'index.html');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Fallback for SPA Routing (ex: /about, /contact, etc).
      fs.readFile(path.join(root, 'index.html'), (err2, fallback) => {
        if (err2) {
          res.writeHead(500);
          res.end('Server error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(fallback);
        }
      });
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}).listen(PORT, () => {
  console.log(`Glaze Dev Server running at http://localhost:${PORT}`);
});