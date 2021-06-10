const http = require('http');
http.createServer((request, response) => {
    const {url, method} = request;
    if(url === '/' && method.toLowerCase() === 'get') {
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end("你访问的是首页！");
    } else {
        response.statusCode = 404;
        response.end();
    }
    
}).listen(3000, () => {
    console.log('server start up at 3000')
})