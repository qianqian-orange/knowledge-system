const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const mockerApi = require('mocker-api');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const resolve = (relativePath) => path.resolve(__dirname, relativePath);

const config = {
  entry: resolve('./src/index.js'),
  output: {
    path: resolve('./dist'),
    filename: 'bundle.[hash:6].js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins:function () {
                return [
                  require('autoprefixer')()
                ]
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')()
                ]
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jepg|jpg|webp|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240, // 10kb,
            esModule: false,
            name: '[name]_[hash:6].[ext]',
            outputPath: 'assets'
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false
      },
      config: {
        title: 'hello world'
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/js/*.js',
        to: resolve('./dist/js'),
        flatten: true,
      },
    ], {
      ignore: ['c.js']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new OptimizeCssPlugin(),
  ],
  devServer: {
    port: 8000,
    open: true,
    stats: 'errors-only',
    before(app) {
      mockerApi(app, resolve('./mock/mocker.js'))
    },
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
}

module.exports = smp.wrap(config);