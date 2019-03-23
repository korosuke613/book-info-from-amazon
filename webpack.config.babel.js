import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        contentScripts: path.join(__dirname, 'app', 'content.ts'),
    },
    mode: "development",
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'scripts/[name].bundle.js',
    },
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
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
                    from: path.join(__dirname, 'app', 'manifest.json'),
                    to: path.join(__dirname, 'dist'),
                }
            ]
        )
    ]
};