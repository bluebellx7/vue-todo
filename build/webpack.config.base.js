
const path = require('path')

const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'devlopment'

const config = {
  mode: process.env.NODE_ENV || 'production', // production || devlopment
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.[hash:8].js',
    publicPath: '/public' // devServer的 historyApiFallback 中index对应
  },
  module: {
    rules: [
      {
        // 所有需要检测文件的后缀名集合
        test: /\.(vue|js|jsx)$/,
        // 使用eslint-loader
        loader: 'eslint-loader',
        // 不检测/node_modules/下的文件，因为/node_modules/里的js文件非常多，而且已经经过Babel等编译处理，这些文件肯定是不符合eslint的standard标准的
        // 因为经过Babel处理之后的js,可能是使用es5的规则，而eslint的standard校验标准是使用es6甚至es7的规则
        exclude: /node_modules/,
        // .vue文件指定用vue-loader处理，eslint只是做代码检测，不能让他来默认处理.vue文件，我们希望vue-loader在进行代码处理之前，先进行一次eslint代码检测，若果代码检测不通过，直接报错，不再需要vue-loader处理；
        // pre表示预处理，对于这几种文件，在使用真正的loader去处理之前，都会通过eslint-loader进行代码检测预处理，不同参数还能指定后处理
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      // {
      //     test: /\.js$/,
      //     loader: 'babel-loader',
      //     exclude: /node_modules/
      // },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name]-[hash:8].[ext]'
            }
          }
        ]
      },
      // {
      //     test:/\.css$/,
      //     use:[
      //         'vue-style-loader',
      //         'css-loader'
      //     ]
      // },
      {
        test: /\.css$/,
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
              }
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      }
    ]
  }
}

module.exports = config
