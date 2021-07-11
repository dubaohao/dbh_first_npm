# first_npm_package
> 20210707: DBH的第一个npm包

# 使用
```
npm install --save-dev dbh_first_npm@1.0.2

// 创建一个最简单的项目，尝试调用npm包

// package.json 自动添加了依赖
{
  "name": "test",
  "version": "1.0.1",
  "description": "test",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "node index.js"
  },
  "keywords": [
    "npm",
    "package"
  ],
  "author": "dubaohao24@126.com",
  "license": "ISC",
  "dependencies": {
    "dbh_first_npm": "^1.0.2"
  }
}

// index.js 调用方法
import { Utils } from 'dbh_first_npm'
const a = 5
const b = 6
console.log('c=', Utils.sum(a,b))
```

# 模块导出

## Utils
<strong>sum（）求和</strong>

const a = 1

const b = 2

console.log('a+b=', sum(a,b))