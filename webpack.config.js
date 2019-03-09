module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ['react', 'es2015', 'stage-0']
      },
    },
    {
      test:/\.(s*)css$/,
      use:['style-loader','css-loader', 'sass-loader']
   }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    port: 9001
  }
};