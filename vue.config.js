const path = require('path');
//当前是否是开发环境
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    //部署应用包时的基本URL
    publicPath: process.env.NODE_ENV === "production" ? "/vueclidemo/dist/" : "/",
    //输出文件路径
    outputDir: "dist",
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",
    //生成的index.html的路径
    indexPath: "p/index.html",
    // 生成的静态资源用hash来命名
    filenameHashing: true,
    // 当修改完代码之后是否就启动eslint的语法检查
    lintOnSave: false,
    // 是否使用包含运行时编译器的Vue构建版本，设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: true,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // webpack的配置：https://www.jb51.net/article/150844.htm
    // config 是当前webpack的默认配置
    configureWebpack: config => {
        if (debug) {
            // 开发环境配置
            // sourcemap https://www.cnblogs.com/hhhyaaon/p/5657469.html
            config.devtool = '#cheap-module-eval-source-map'
        } else { // 生产环境配置
        }
        //Object.assign(config,obj) : 将obj的内容追加到config里面
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    'vue$': 'vue/dist/vue.js'
                }
            }
        })
    },
    //多页面配置(单页面应用下无需配置)
    /*  pages: {
        index: {
          // page 的入口
          entry: 'src/index/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          //chunk参考：https://segmentfault.com/q/1010000016925412/a-1020000016946034
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
      },*/
    chainWebpack: (config) => {
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    // css的相关配置
    css: {
        // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .
        // module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
        modules: false,
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        extract: true,
        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {
                //这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }
    },
    //所有 webpack-dev-server 的选项都支持
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: null,
    },
    // 第三方插件配置
    pluginOptions: {}

};