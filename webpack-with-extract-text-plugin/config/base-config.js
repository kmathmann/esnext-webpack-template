import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const ROOT_PATH = path.resolve('./');

export default {
    entry: {
        template: [
            path.resolve('src/index')
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].bundle.js?[hash]'
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
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
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
                        }]
                })
            }

        ]
    },
};
