const util = require('util');

async function fn() {
   return 'hello netease';
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
   if(err) throw err;
   console.log(ret);
});

console.log(util.inspect(util, {showHidden: true, depth: null, colors: true}));