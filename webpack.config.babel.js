import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        contentScripts: path.join(__dirname, 'app', 'content.js'),
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