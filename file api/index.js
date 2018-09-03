const fs = require('fs');
// const { URL } = require('url');
// const fileUrl = new URL('file://file/test_file.txt');
const url = 'nodejs_learnning/file/test_file.txt';
let fdNum;
let strBuff = new Buffer('雷军说，');
fs.open(url, 'r+', (err, fd) =>{
   if(err){
      console.error(err);
   }
   console.log(fd);
   fdNum = fd;
   fs.write(fdNum, strBuff, 0, strBuff.length, 0);
   fs.fstat(fd, (err, stat) => {
      if(err)console.log(err);
      console.log(stat);
   });
});
fs.readFile(url,'utf8', (err, data) =>{
   if(err)console.error(err);
   console.log(data);
});
fs.watchFile(url, (curr, prev) => {
   console.log(curr);
   console.log(prev);
});
