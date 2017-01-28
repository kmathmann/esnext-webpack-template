import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const ROOT_PATH = path.resolve(__dirname);

export default {
    entry: {
        template: [
            path.resolve('./src/index'),
            'whatwg-fetch'
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
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
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
    devServer:{
        port:8080,
        compress:true,
        hot:true
    },
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextPlugin("[name].bundle.css"),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};


/*
 {
 test: /\.scss$/,
 loader: ExtractTextPlugin({
 fallbackLoader: 'style-loader',
 loaders: ['css-loader?sourceMap',
 {
 loader: 'postcss-loader?sourceMap',
 options: {
 plugins: () => [autoprefixer]
 },
 },
 'sass-loader?sourceMap']
 }),
 include: path.resolve(ROOT_PATH, 'src')
 }
 */