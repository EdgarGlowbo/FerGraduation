const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',    
    calendar: './src/script.js',    
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }, 
  
  watch: true
};