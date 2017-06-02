import nodemon from 'nodemon';
import path from 'path';


export const startServer = () => new Promise(resolve => {
    const serverFile = path.resolve(__dirname, '../../dist/server.js');
    nodemon({
        script: serverFile,
        watch: serverFile,
    });
});
