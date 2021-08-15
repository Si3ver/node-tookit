/**
 * 实现控制台选择菜单
 * 1. ctrl + c 退出
 * 2. w上移
 * 3. s下移
 * 4. 回车键，确定 & 打印结果 & 退出
 */

const ttys = require('ttys');
const process = require('process')

const stdin = process.stdin
const stdout = ttys.stdout;

stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

function getChar() {
  return new Promise(resolve => {
    stdin.once('data', function(key) {
      resolve(key)
    })
  })
}

function up(n = 1) {
  stdout.write('\033[' + n + 'A')
}
function down(n = 1) {
  stdout.write('\033[' + n + 'B')
}
function right(n = 1) {
  stdout.write('\033[' + n + 'C')
}
function left(n = 1) {
  stdout.write('\033[' + n + 'D')
}

async function select(choises) {
  let selected = 0
  for (let i = 0; i < choises.length; ++i) {
    const choise = choises[i]
    if (i === selected) {
      stdout.write(`[x] ${choise}\n`)
    } else {
      stdout.write(`[ ] ${choise}\n`)
    }
  }
  up(choises.length)
  right()

  while (true) {
    var char = await getChar()
    if (char === '\u0003') {
      process.exit()
    }
    if (char === 'w' && selected > 0) {
      stdout.write(' ')
      left()
      selected--
      up()
      stdout.write('x')
      left()
    }
    if (char === 's' && selected < choises.length - 1) {
      stdout.write(' ')
      left()
      selected++
      down()
      stdout.write('x')
      left()
    }
    if (char === '\r') {
      down(choises.length - selected)
      left()
      return selected
    }
  }
}

(async function () {
  const choises = ['vue', 'react', 'angular']
  stdout.write('Which framework do you want to use?\n')
  const selected = await select(choises)
  stdout.write(`You choose: ${choises[selected]}\n`)
  process.exit()
})()
