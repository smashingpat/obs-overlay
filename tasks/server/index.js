import Nodemon from 'nodemon';
import path from 'path';


export const startServer = () => new Promise(resolve => {
    const serverFile = path.resolve(__dirname, '../../dist/server.js');
    const nodemon = new Nodemon(serverFile, {
        watch: path.resolve(__dirname, '../../dist'),
    });
});
