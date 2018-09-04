const  url  = require('url');

const myURL =
  url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

  console.log(myURL);

const url1 = new url.URL('foo', 'https://example.org');
   console.log(url1);