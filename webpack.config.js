const path = require('path');

module.exports = {
  entry: './css/gitalk.css', // Your entry CSS file
  output: {
    filename: 'gitalk.css', // Output bundled file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devtool: 'source-map', // Enable source maps for debugging
  module: { // <- This is where 'rules' should be placed
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};