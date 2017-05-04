# stack-log
可以打印栈信息的日志函数,移动**混合开发**必备!!!

## 简介

断点信息,可以反映函数的调用栈,但是不是所有的场景都适合打断点.console 直接输出的日志,可以反映的简单行数信息,但是部分场景需要结合日志所在函数的调用栈来确定某些调试信息.

偶然间发现,可以用 new Error 记录栈结构,只要能适当处理,去除不必要的栈信息,就可以很好地保持 console 日志的连续性和断点调试时函数调用的明晰性.

这是一个有一点小技巧的工具函数.很简单,很实用!

## 安装

### nodejs 环境

```
npm i stack-log --save
```

### 浏览器环境

下载 **lib/stack-log.js** 到本地,然后:

```
<script type="text/javascript" src="path/to/stack-log.js"></script>
```

## 使用示例

### nodejs 示例

```
const {log} = require("stack-log")

function funcA (){
  funcB()
}

function funcB(){
  funcC()
}

function funcC(){
  log({k:"v"})
}

funcA()


/* 可能的输出:
{"k":"v"}
    at funcC (/Users/yanfeng/Documents/tmp/stack-test/index.js:12:3)
    at funcB (/Users/yanfeng/Documents/tmp/stack-test/index.js:8:3)
    at funcA (/Users/yanfeng/Documents/tmp/stack-test/index.js:4:3)
    at Object.<anonymous> (/Users/yanfeng/Documents/tmp/stack-test/index.js:15:1)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
*/
```

### 浏览器 示例

```html
<script type="text/javascript" src="script/stack-log.js"></script>
<script type="text/javascript">
function funcA (){
  funcB()
}

function funcB(){
  funcC()
}

function funcC(){
  log({k:"v"})
}

funcA()
</script>
```

可能的输出:

```
{"k":"v"}
    at funcC (file:///Users/yanfeng/Documents/tmp/index.html:12:3)
    at funcB (file:///Users/yanfeng/Documents/tmp/index.html:8:3)
    at funcA (file:///Users/yanfeng/Documents/tmp/index.html:4:3)
    at file:///Users/yanfeng/Documents/tmp/index.html:15:1
```