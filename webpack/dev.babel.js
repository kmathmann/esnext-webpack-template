import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT_PATH = path.resolve('./');

export default {
    entry: {
        template: [
            path.resolve('./src/index')
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.resolve(ROOT_PATH, 'src')
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
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
