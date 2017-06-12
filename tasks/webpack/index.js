import webpack from 'webpack';
import webpackConfigClient from './webpack.config.client';
import webpackConfigServer from './webpack.config.server';
import gutil from 'gulp-util';


export const webpackCallback = callback => {
    let cb = callback;

    return (err, stats) => {
        if (err) {
            gutil.PluginError('webpack', err.message || err);
        }

        gutil.log(stats.toString({
            colors: true,
            chunks: false,
        }));

        if (typeof cb === 'function') {
            cb();
            cb = null;
        }
    }
}

export const createWebpackConfigWithHMR = config => Object.assign({}, config, {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        ...config.entry,
    ],
    plugins: [
        ...config.plugins,
        new webpack.HotModuleReplacementPlugin(),
    ]
});

export const createBundler = config => webpack(config);
export const createWatcher = (config, cb) => webpack(config).watch({}, webpackCallback(cb));

export const createClientBundler = () => createBundler(webpackConfigClient);
export const createServerBundler = () => createBundler(webpackConfigServer);

// bundlers
export const bundleClient = () => new Promise(resolve => {
    createClientBundler().run(webpackCallback(resolve));
});
export const bundleServer = () => new Promise(resolve => {
    createServerBundler().run(webpackCallback(resolve));
});
export const bundleScripts = () => new Promise(resolve => createBundler([
    webpackConfigClient,
    webpackConfigServer,
]).run(webpackCallback(resolve)));

// watchers
export const watchClient = () => new Promise(resolve => createWatcher(webpackConfigClient, resolve));
export const watchServer = () => new Promise(resolve => createWatcher(webpackConfigServer, resolve));

// configs
export { webpackConfigClient };
export { webpackConfigServer };