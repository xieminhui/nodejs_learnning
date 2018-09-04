const http = require('http');

const server = http.createServer((req, res) => {
   //req 是一个http.IncomingMessage实例，它是可读流
   //res是一个http.ServerResponse实例，它是可写流
   let body = '';
   //接受数据为utf8；
   //如果没有设置字符编码，则会接收到buffer对象。
   req.setEncoding('utf8');

   //如果添加了监听器，则可读流会触发‘data’事件
   req.on('data', (chunk) => {
      body += chunk;
   });

   //end事件表明整个请求体已被接收
   req.on('end', () => {
      try {
         const data = JSON.parse(body);
         //响应一些信息给用户
         res.write(typeof data);
         res.end();
      } catch(er) {
         //json解析失败
         res.statusCode = 400;
         return res.end(`错误：${er.message}`);
      }
   });
   server.listen(1337);
});