const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? '/index.html' : req.url;
    const fileExtension = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
    }[fileExtension] || 'text/plain';

    fs.readFile(__dirname + filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 - File Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('500 - Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
