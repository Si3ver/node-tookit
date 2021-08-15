// readline 读取用户输入

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO：记录答案到数据库中
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

async function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

;(async function () {
  console.log(await ask('Your project name?'))
}())
