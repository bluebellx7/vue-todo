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
              localIdentName: '[path][name]-[hash:base64:5]'
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

const config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
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

module.exports = config
