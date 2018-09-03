const  path = require('path');

const url = 'c:/foo/bar/baz/test.html';

console.log('******************');

console.log(path.basename(url));

console.log(process.env.PATH.split(path.delimiter));

console.log(path.extname(url));

//判断是不是一个绝对路径
console.warn(path.isAbsolute(url));

console.log(path.parse(url));

//解析为绝对路径
console.log(path.resolve('/foo/bar', './baz'));
console.log(path.resolve('/foo/bar', '/tmp/file/'));

console.log('******************');
