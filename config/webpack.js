const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ROOT = path.resolve(__dirname, '../')
const SRC = path.resolve(__dirname, '../src')
const PUBLIC = path.resolve(__dirname, '../public')
const TEMPLATE = path.resolve(__dirname, '../public/index.html')

module.exports = {
  mode: 'development',
  entry: path.join(SRC, '/index.js'),
  module: {
    rules: [
      /**
        * BABEL LOADER
        */
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [

    /**
    * CLEAN PLUGIN
    */
    new CleanWebpackPlugin(),

    /**
     * TERSER PLUGIN
    */
    new TerserPlugin({
      terserOptions: {
        ecma: 8,
        sourceMap: true,
        parallel: true,
        warnings: false,
        ie8: false,
        cache: true,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }
    }),

    /**
      * HTML PLUGIN
      */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: TEMPLATE,
      inject: true
    })
  ],
  devServer: {
    port: 3001,
    compress: true,
    historyApiFallback: true,
    contentBase: path.join(ROOT),
    index: path.join(PUBLIC, '/index.html'),
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
