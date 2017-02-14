import webpack from 'webpack';
import config from './prod.babel';

config.devtool = 'inline-source-maps';

config.plugins.pop();
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('qa'),
        __DEV__: false,
        __QA__: true,
        __LIVE__: false,
    })
);

export default config;