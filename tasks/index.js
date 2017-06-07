import 'babel-polyfill';
import gulp from 'gulp';
import { watchServer } from './webpack';
import { startServer, startDevServer } from './server';
import { cleanDir } from './clean';
import { configureConfig } from './config';

export const serve = gulp.series([
    configureConfig,
    cleanDir,
    watchServer,
    startDevServer,
    startServer,
]);
