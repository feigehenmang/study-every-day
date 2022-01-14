const fs = require('fs')
const path = require('path')

const parser = require('@babel/parser') // 用来转换AST
const traverse = require('@babel/traverse').default // 依赖收集
const babel = require('@babel/core') // 将AST转换为需要的代码

function getModuleInfo(p) {
    const file = fs.readFileSync(p, 'utf-8')
    //  转换AST 将开发代码转换为AST
    const ast = parser.parse(file, {
        sourceType: 'module'
    })
    // console.log(JSON.stringify(ast))

    // 依赖收集
    const deps = {} // 记录有依赖关系的所有js 和 路径
    traverse(ast, {
        ImportDeclaration({ node }) {
            // console.log(JSON.stringify(node))
            const dirname = path.dirname(p)
            const nodePath = path.join(dirname, node.source.value)
            // console.log(nodePath)
            deps[node.source.value] = nodePath
        }
    })

    // ES6 => ES5
    const result = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    // console.log(JSON.stringify(result.code))

    const moduleInfo = { file: p, deps, code: result.code };
    return moduleInfo
}

// 解析模块
function parseModules(file) {
    const entry = getModuleInfo(file)
    const temp = [entry]
    const depsGraph = {}
    getDeps(temp, entry)
    temp.forEach((moduleInfo) => {
        depsGraph[moduleInfo.file] = {
            deps: moduleInfo.deps,
            code: moduleInfo.code,
        };
    });
    return depsGraph;


}
function getDeps(temp, { deps }) {
    Object.keys(deps).forEach(key => {
        const child = getModuleInfo(deps[key])
        temp.push(child)
        getDeps(temp, child)
    })
}

function bundle(file) {
    const depsGraph = JSON.stringify(parseModules(file));
    console.log(depsGraph)
    return `(function (graph) {
          function require(file) {
              function absRequire(relPath) {
                  return require(graph[file].deps[relPath])
              }
              var exports = {};
              (function (require,exports,code) {
                  eval(code)
              })(absRequire,exports,graph[file].code)
              return exports
          }
          require('${file}')
      })(${depsGraph})`;
}


!fs.existsSync("./dist") && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", bundle('./src/index.js'));

// const info = getModuleInfo('./src/index.js')
// console.log(JSON.stringify(parseModules('./src/index.js')))


