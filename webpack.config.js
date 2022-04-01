const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {version} = require('./package.json');

module.exports = function(env, argv) {
  return {
    cache: true,
    entry: {
        app: ["./src/index.js", path.resolve(__dirname, './src/index.scss')]
    }, 
    mode: 'development',
    target: "web",
    output:
      argv.mode === 'production'
        ? {
            path: path.resolve(__dirname, './build'),
            filename: 'bundle.js',
          }
        : undefined, // Otherwise the CleanWebpackPlugin will wipe our build during devserver
    resolve: {
        fallback: {
            fs: false
        }
    },
    devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      fallback: {
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("http-browserify"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        fs: false,
        zlib: false,
        symlinks: false,
        util: false,
        url: false,
        querystring: false
      },
      alias: {
        process: "process/browser"
    },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
    devServer:
      argv.mode === 'development'
        ? {
            contentBase: path.resolve(__dirname, './src'),
            open: true,
            overlay: true,
            port: 9000,
            stats: 'errors-warnings',
            https: true,
          }
        : undefined,
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')}),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        favicon: 'public/webex-logo.png',
      }),
      new webpack.ProvidePlugin({
        process: path.resolve(path.join(__dirname, "node_modules/process/browser")),
      }),
    ],
  };
};