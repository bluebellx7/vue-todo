
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'devlopment'

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  // https://cloud.tencent.com/developer/section/1477376
  // historyApiFallback: {
  //   rewrites: [
  //     { from: /^\/$/, to: '/views/landing.html' },
  //     { from: /^\/subpage/, to: '/views/subpage.html' },
  //     { from: /./, to: '/views/404.html' }
  //   ]
  // },
  historyApiFallback: { // 用于如果找不到界面就返回默认首页
    index: '/public/index.html'
  },

  hot: true
  // open:true
}

const defaultPulgins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"devlopment"' : '"production"'
    },
    webpackName1: '"test DefinePlugin"'
  }),
  new VueLoaderPlugin(),
  new HTMLWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

let config

const stylusLoader = {
  test: /\.(styl|stylus)$/,
  exclude: /node_modules/,
  oneOf: [
    // 这里匹配 `<style module>`
    {
      resourceQuery: /module/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            // 开启 CSS Modules
            // modules: true,
            modules: {
              // 自定义生成的类名
              localIdentName: isDev ? '[path][name]-[hash:base64:5]' : '[hash:base64:7]'
            }
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    },
    // 这里匹配普通的 `<style>` 或 `<style scoped>`
    {
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'

      ]
    }
  ]
}

if (isDev) {
  config = merge(baseConfig, {
    module: {
      rules: [
        stylusLoader
      ]
    },
    // devtool: '#cheap-module-eval-source-map',
    devServer: devServer,
    plugins: defaultPulgins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]),
    resolve: {
      alias: {
        vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
      }
    }
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        stylusLoader
      ]
    },
    plugins: defaultPulgins,
    optimization: {
      minimize: false,
      splitChunks: {
        chunks: 'all', //  async
        minSize: 400,
        automaticNameDelimiter: '~'
      },
      runtimeChunk: true
    }
  })
}

module.exports = config
