// vue-loader 的配置项
module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 除去空格符
    extractCSS: !isDev // css单独提取出来,再在webpack.config.base.js里面配置,开发的环境不需要,正式环境需要
    // hotReload: false  //热重载功能,根据环境变量生成,默认不用设置.
  }
}
