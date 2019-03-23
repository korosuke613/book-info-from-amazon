const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const source_dir = 'app';
const output_dir = 'dist';

module.exports = {
    entry: {
        content: path.join(__dirname, source_dir, 'content.ts'),
        background: path.join(__dirname, source_dir, 'background.ts'),
        popup: path.join(__dirname, source_dir, 'popup.ts'),
        options: path.join(__dirname, source_dir, 'options.ts'),
    },
    output: {
        path: path.join(__dirname, output_dir),
        filename: 'scripts/[name].bundle.js',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: { loader: 'babel-loader' }
            },
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {
                    from: 'manifest.json',
                },
                {
                    from: '*.html',
                },
                {
                    from: '*.png',
                    to: 'images',
                    context: 'images'
                }
            ],
            { context: source_dir }
        )
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};