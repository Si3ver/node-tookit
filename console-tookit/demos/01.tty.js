// 移动控制台光标 \033
// https://github.com/heapwolf/cdir/blob/master/cdir.js

var tty = require('tty');
var ttys = require('ttys');
var rl = require('readline');

var stdin = ttys.stdin;
var stdout = ttys.stdout;


stdout.write('hello world\n')
stdout.write('\033[1A') // 光标网上移动1行
stdout.write('disti\n')
