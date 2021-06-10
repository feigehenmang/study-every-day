module.exports = {
    'get /': (request, response) => {
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('这是首页的内容');
    },
    'get /detail': (request, response) => {
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('这是首页详情页')
    }
}