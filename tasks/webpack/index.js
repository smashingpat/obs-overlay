import webpack from 'webpack';
import webpackConfigClient from './webpack.config.client';
import webpackConfigServer from './webpack.config.server';
import gutil from 'gulp-util';


export const watchScripts = () => new Promise(resolve => {
    webpack([
        webpackConfigClient,
        webpackConfigServer,
    ]).watch({}, (err, stats) => {
        if (err) {
            gutil.PluginError('webpack', err.message || err);
        }

        gutil.log(stats.toString({
            colors: true,
            chunks: false,
        }));

        resolve();
    })
})