const webpack = require('webpack')
module.exports = {
    // 配置less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    devServer: {
        proxy: {
            '/soft': {
                target: 'http://www.cztouch.com/upfiles/',
                changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL
                // pathRewrite: {
                //     '^/ses': '',
                // },
            },
        },
    },
}
