const { stat, readFile } = require('fs/promises');
const http = require('http');
const { resolve } = require('path');
const { load } = require('./loader');
const temp = './public';
http.createServer((request, response) => {
    let {url, method} = request;
    method = method.toLowerCase();
    // post body的处理
    const data = [];
    request.on('data', (result) => data.push(result));
    request.on('end', () => {
        request.data = Buffer.concat(data).toString()
        // 读取文件进行url和method的比对
        load(resolve(__dirname, 'routes'), filename => {
            const prefix = filename === 'index.js' ? '' : '/' + filename.split('.')[0];
            const module = require(`./routes/${filename}`);
            Object.keys(module).forEach(str => {
                let [currMethod, currUrl] = str.split(' ');
                currUrl = prefix + currUrl;
                if(url === currUrl && currMethod === method) {
                    module[str](request, response)
                }
            })
        })
    })

    const filename = resolve(__dirname, temp, url.slice(1));
    stat(filename).then(
        result => {
            if(result.isFile()) {
                readFile(filename)
                .then(result => {
                    response.end(result);
                })
            }
        },
        err => {
            response.statusCode = 404;
            response.end();
        }
    )
    
}).listen(3000, () => {
    console.log('server start up at 3000')
})