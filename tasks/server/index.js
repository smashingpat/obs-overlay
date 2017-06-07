import browserSync from 'browser-sync';
import nodemon from 'nodemon';
import path from 'path';
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
    browserSync({
        open: config.open,
        port: config.port,
        proxy: {
            target: `http://localhost:${config.serverPort}`,
        }
    }, resolve);
})