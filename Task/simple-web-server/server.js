const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to serve static files
function serveFile(res, filePath, contentType, responseCode = 200) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

// Create server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/home' || url === '/') {
        serveFile(res, path.join(__dirname, 'public', 'index.html'), 'text/html');
    } else if (url === '/about') {
        serveFile(res, path.join(__dirname, 'public', 'about.html'), 'text/html');
    } else if (url === '/contact') {
        serveFile(res, path.join(__dirname, 'public', 'contact.html'), 'text/html');
    } else if (url === '/styles.css') {
        serveFile(res, path.join(__dirname, 'public', 'styles.css'), 'text/css');
    } else {
        serveFile(res, path.join(__dirname, 'public', '404.html'), 'text/html', 404);
    }
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
