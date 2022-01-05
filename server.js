const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res)=>{
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    console.log(__dirname);

    const getPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

    let basePath = '';

    switch (req.url) {
        case '/':
        case '/home':
        case '/index.html':
            basePath = getPath('index');
            res.statusCode = 200;
            break;

            //redirect
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts');
            res.end();
            return;
        case '/contacts':
            basePath = getPath('contacts');
            res.statusCode = 200;
            break;
        default:
            basePath = getPath('error');
            res.statusCode = 404;
            break;
    }

    console.log(basePath);

    fs.readFile(basePath, (err, data)=>{
        if(err){
            console.log(err);
            res.statusCode = 500;
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(PORT, 'localhost', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Listening port ${PORT}`);
    }
})