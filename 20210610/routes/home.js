module.exports = {
    'post /': (request, response) => {
        // 正常环境不应该设置*，为了测试设置*
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.setHeader('Access-Control-Allow-Credentials', true);
        response.end('这是home的内容' + request.data);
    },
    'get /detail': (request, response) => {
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('这是home详情页')
    }
}