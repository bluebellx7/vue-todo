# Vue Todo 学习项目

## 如何使用

- `npm install`

- `npm run build`


## 目录说明

- `build` 编译相关配置（webpack、vue相关配置）
- - `template.thml` 默认挂载点
- - `vue-loader.config.js` vue-loader的options配置
- - `webpack.config.base.js` webpack基础配置，前后端通用
- - `webpack.config.client.js` webpack客户端代码，对应的会增加server
- - `webpack.config.practice.js` 练习的webpack配置
- `client` 前端vue的代码
- - `assets` 资源文件（images：图片文件，styles：样式文件）
- - `layout` 共用组件
- - `views` 页面组件
- - `app.vue` 主页面
- - `index.js` vue的入口文件，在weboack.config.base.js 的entry中有配置

- - `practice` 练习的代码

- `.babelrc` jsx解析配置
- `.editorconfig` EditorConfig配置，Editorconfig 是一套用于统一代码格式的解决方案，适用于多平台，多软件
- `package.json` node配置
- `postcss.config.js` 自动添加浏览器前缀，与autoprefixer一起使用


## 如何新建一个项目

- `npm init` 初始化一个npm项目会得到一个package.json

- package.json 部分代码如下
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    // cross-env 能跨平台地设置及使用环境变量，使不同系统的环境变量相同
    // NODE_ENV 环境变量
    // 能够这样访问console.log(process.env.NODE_ENV);
    // production
    // --config webpack配置具体路径
    // --mode 环境
    "build:client": "cross-env NODE_ENV=production webpack  --mode=production --config build/webpack.config.client.js",
    // 通过rimraf 删除dist目录
    "clean": "rimraf dist",
    // 先删除之前生成的文件，然后编译
    "build": "npm run clean && npm run build:client",
    "dev": "cross-env NODE_ENV=devlopment webpack-dev-server  --mode=development --config build/webpack.config.client.js",
    // 进行eslint检查，只检查client和build目录（可根据需求增减）
    "lint": "eslint --ext .js --ext .jsx --ext .vue client/ build/",
    // --fix 自动修复代码
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue client/ build/",
    // git提交前 使用eslint检查代码，通过插件husky实现的
    "precommit": "npm run lint"
  },
"dependencies": {
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "@babel/core": "^7.7.2",
    // 不同浏览器自动加前缀 比如-webkit-，与postcss-loader一起使用
    "autoprefixer": "^9.7.1",
    "babel-core": "^6.26.3",
    "babel-eslint": "^10.0.3",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-vue-jsx": "^3.7.0",
    "babel-preset-env": "^1.7.0",
    "cross-env": "^6.0.3",
    "css-loader": "^3.2.0",
    "eslint": "^6.6.0",
    "eslint-config-standard": "^14.1.0",
    "eslint-loader": "^3.0.2",
    "eslint-plugin-html": "^6.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-node": "^10.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
    "eslint-plugin-vue": "^6.0.1",
    // 其它loader依赖file-loader
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    // git提交预检查
    "husky": "^3.1.0",
    // 自动添加浏览器前缀，与autoprefixer一起使用
    "postcss-loader": "^3.0.0",
    // 用于npm run clean
    "rimraf": "^3.0.0",
    // 样式代码处理
    "style-loader": "^1.0.0",
    // stylus
    "stylus": "^0.54.7",
    "stylus-loader": "^3.0.2",
    // 处理css中的图片资源遇到的问题
    // 我们常用的两种loader是file-loader或者url-loader，两者的主要差异在于：
    // url-loader可以设置图片大小限制，当图片超过限制时，其表现行为等同于file-loader，// 而当图片不超过限制时，则会将图片以base64的形式打包进css文件，以减少请求次数。
    "url-loader": "^2.2.0",
    "vue-loader": "^15.7.2",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.10",
    // webpack
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  }
```

- 执行 `npm install`

- 拷贝build中文件

- 拷贝client中目录结构
