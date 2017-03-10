import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AppcacheWebpackPlugin from 'appcache-webpack-plugin';
import getBaseConfig from './base-config';

const ROOT_PATH = path.resolve('./');

export default (qa = false) => ( {
    ...getBaseConfig(false),
    devtool: qa ? 'inline-source-map' : 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new AppcacheWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(qa ? 'qa' : 'production'),
            __DEV__: false,
            __QA__: qa,
            __LIVE__: !qa,
        }),
    ]
});

