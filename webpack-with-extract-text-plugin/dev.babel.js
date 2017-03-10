import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import getBaseConfig from './config/base-config';

const ROOT_PATH = path.resolve('./');

export default {
    ...getBaseConfig(true),
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        compress: true,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html')
        }),
        new ExtractTextPlugin('[name].bundle.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true,
            __QA__: false,
            __LIVE__: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
