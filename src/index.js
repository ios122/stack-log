class Logger{
  constructor(msg) {
    const stackInfo = (new Error()).stack
    const stackArray = stackInfo.split("\n")
    if (stackArray[0] === "Error") { // 兼容 Android / iOS
      stackArray.shift()
    }
    stackArray.shift()
    stackArray.shift()

    let msgStr = ""
    try { // 优先使用 JSON 序列化,这样输出的日志,往往更有意义.
      msgStr = JSON.stringify(msg)
    } catch (e) {
      msgStr = msg.toString()
    }

    stackArray.unshift(msgStr)
    this.stack = stackArray.join("\n")
  }
}

function log(msg) {
   console.log(new Logger(msg).stack)
}

module.exports = log
