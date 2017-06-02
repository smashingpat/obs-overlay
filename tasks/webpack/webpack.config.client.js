import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import getLoaders from './common-loaders';
import getPlugins from './common-plugins';
import getResolve from './common-resolve';

export default {
    entry: ['./source/client'],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name]-bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: getLoaders(),
    },
    plugins: getPlugins(),
    resolve: getResolve(),
};
