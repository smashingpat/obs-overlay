import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import getLoaders from './common-loaders';

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
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/shell.html',
        }),
    ],
};
