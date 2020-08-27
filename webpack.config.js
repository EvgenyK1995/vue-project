const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { VueLoaderPlugin } = require('vue-loader'),
      isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
  mode: (isProduction ? 'production' : 'development'),
  entry: './src',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            styl: 'vue-style-loader!css-loader!stylus-loader'
          }
        }
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: !isProduction }
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: !isProduction }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          (isProduction ? MiniCssExtractPlugin.loader : 'style-loader'),
          {
            loader: 'css-loader',
            options: { sourceMap: !isProduction }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `./src/index.html`,
      filename: './index.html'
    })
  ]
};