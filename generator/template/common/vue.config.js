const path = require('path');
const assetsDir = ''
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const filenameHashing = true
const productionSourceMap = !IS_PROD

function getAssetPath(assetsDir, filePath) {
    return assetsDir ?
        path.posix.join(assetsDir, filePath) :
        filePath
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './', // 基本路径
    outputDir: 'dist', // 输出文件目录，默认dist
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    configureWebpack: config => {
        config.entry.app = ["babel-polyfill", "./src/main.js"];
    },
    chainWebpack: (config) => {
        // 指定环境打包js路径
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
            const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
            const filename = getAssetPath(
                assetsDir,
                `js/[name]${isLegacyBundle ? `-legacy` : ``}${filenameHashing ? '.[contenthash:8]' : ''}.js`
            )
            config.mode('production').devtool(productionSourceMap ? 'source-map' : false).output.filename(filename).chunkFilename(filename)
        }
    },
    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        modules: false, // 启用 CSS modules for all css / pre-processor files.
        loaderOptions: {
            scss: {}
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080, //端口
        https: false, //是否开启https
        open: true,
        hotOnly: false,
        // 代理转发配置，用于调试环境
        /*proxy: {
            '/api': {
                target: 'http://www.baidu.com/api',//代理地址
                changeOrigin: true, // 允许websockets跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        },*/
        //数据mock
        before: app => {
            let bodyParser = require('body-parser')
            app.use(bodyParser.urlencoded({
                "limit": "10000kb",
                extended: false
            })); //根据需求更改limit大小
            app.use(bodyParser.json({
                "limit": "10000kb"
            }));

        },
    },
}