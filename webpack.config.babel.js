import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const source_dir = 'app';
const output_dir = 'dist';

export default {
    entry: {
        content: path.join(__dirname, source_dir, 'content.ts'),
        background: path.join(__dirname, source_dir, 'background.ts'),
    },
    mode: "development",
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
                    from: path.join(__dirname, source_dir, 'manifest.json'),
                    to: path.join(__dirname, output_dir),
                }
            ]
        )
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};