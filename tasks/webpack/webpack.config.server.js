import path from 'path';
import nodeExternals from 'webpack-node-externals';
import getLoaders from './common-loaders';

export default {
    target: 'node',
    entry: ['./source/server'],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        loaders: getLoaders(),
    },
    externals: [nodeExternals()],
};
