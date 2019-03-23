import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const source_dir = 'app';
const output_dir = 'dist';

export default {
    entry: {
        content: path.join(__dirname, source_dir, 'content.ts'),
        background: path.join(__dirname, source_dir, 'background.ts'),
        popup: path.join(__dirname, source_dir, 'popup.ts'),
        options: path.join(__dirname, source_dir, 'options.ts'),
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, output_dir),
        filename: 'scripts/[name].bundle.js',
    },
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, output_dir),
        port: 9000,
        hot: true,
    },
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
    },
    devtool: 'cheap-module-source-map'
};