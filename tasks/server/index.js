import browserSync from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import nodemon from 'nodemon';
import path from 'path';
import { createWebpackConfigWithHMR, createBundler, webpackConfigClient } from '../webpack';
import config from '../config';


export const startServer = () => new Promise(resolve => {
    const serverFile = path.resolve(__dirname, '../../dist/server.js');
    nodemon({
        exec: config.inspect ? 'node --inspect' : 'node',
        script: serverFile,
        watch: serverFile,
    });
});

export const startDevServer = () => new Promise(resolve => {
    const webpackConfig = createWebpackConfigWithHMR(webpackConfigClient);
    const bundler = createBundler(webpackConfig);
    browserSync({
        open: config.open,
        port: config.port,
        proxy: {
            target: `http://localhost:${config.serverPort}`,
            middleware: [
                webpackHotMiddleware(bundler, {
                    publicPath: webpackConfig.output.publicPath,
                    stats: { colors: true, chunks: false },
                }),
                webpackDevMiddleware(bundler),
            ],
        },
    }, resolve);
})