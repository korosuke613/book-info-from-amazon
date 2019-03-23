const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート
const path = require('path');

const output_dir = 'dist';

// common設定とマージする
module.exports = merge(common, {
    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, output_dir),
        port: 9000,
        hot: true,
    },
    devtool: 'cheap-module-source-map'
})
