module.exports = {
  entry: "./app/App.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(bower_components)/, loader: 'babel'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  }
};