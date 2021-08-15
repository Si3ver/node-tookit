// 打印键盘事件对应的 ascii 编码，ctrl+c退出
var stdin = process.stdin

stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

function getChar() {
  return new Promise(resolve => {
    stdin.on('data', function(key) {
      resolve(key)
    })
  })
}

(async function () {
  while (true) {
    var char = await getChar()
    if (char === '\u0003') {
      process.exit()
    }
    console.log(char.split('').map(c => c.charCodeAt(0)))
  }
})()
