const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml'};
http.createServer((req, res) => {
  const safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath === '/' ? 'index.html' : safePath);
  if (!filePath.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': MIME[path.extname(filePath)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(data);
  });
}).listen(PORT, () => console.log(`\n  ♞ ChessQuest is running at http://localhost:${PORT}\n`));
