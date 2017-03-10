import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AppcacheWebpackPlugin from 'appcache-webpack-plugin';
import BASE_CONFIG from './base-config';

const ROOT_PATH = path.resolve('./');

export default (qa = false) => ( {
    ...BASE_CONFIG,
    devtool: qa ? 'inline-source-map' : 'hidden-source-map',
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html')
        }),
        new ExtractTextPlugin('[name].bundle.css'),
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

