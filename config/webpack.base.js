const  path = require('path');

module.exports = { 
   entry: '',
   output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
   }
};