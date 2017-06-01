import gulp from 'gulp';
import { watchScripts } from './webpack';
import { startServer } from './server';
import { cleanDir } from './clean';

export const serve = gulp.series([
    cleanDir,
    watchScripts,
    startServer,
]);
