import path from 'path';
import nodeExternals from 'webpack-node-externals';
import getLoaders from './common-loaders';
import getPlugins from './common-plugins';
import getResolve from './common-resolve';

export default {
    target: 'node',
    entry: ['./source/server'],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        loaders: getLoaders(true),
    },
    externals: [nodeExternals()],
    plugins: getPlugins(true),
    resolve: getResolve(true),
    devtool: 'inline-source-maps',
};
