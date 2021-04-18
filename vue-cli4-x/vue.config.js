// vue.config.js

// const path = require('path')
// const resolve  = dir => path.join(__dirname, dir)
const webpack = require('webpack')

module.exports = {
  // 选项...
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery'
    }])
    if (process.env.NODE_ENV === 'development') {
      config.resolve.symlinks(true)
    } else {
      /* product */
    }
  },
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {

  //   } else {
  //     /* dev */
  //     config.devtool = 'source-map'
  //   }
  // },
  css: {},
  // devServer: {
  //   open: false,
  //   host: "0.0.0.0",
  //   port: 8080,
  //   https: false,
  //   hotOnly: true,
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   },
  //   /* proxy: {
  //     '/xx': {
  //       target: 'http://2323',
  //       changeOrigin: true,
  //       pathRewirte: {
  //         '^/xx': 'xx'
  //       }
  //     }
  //   } */
  //   parallel: require('os').cpus().length > 1,
  //   // 生产环境开启sourceMap
  //   productionSourceMap: false
  // }
}