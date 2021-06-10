const http = require('http');
http.createServer((request, response) => {
    response.end('Hello Nodejs');
}).listen(3000, () => {
    console.log('server start up at 3000')
})