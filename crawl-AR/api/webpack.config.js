module.exports = {
  entry: './api.js',
  output: {
    filename: '../output/api.js'
  },
  node: {
    fs: "empty"
  }
};
