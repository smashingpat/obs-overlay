import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import socket from 'socket.io';
import logger from 'morgan';
import { configureStore } from './core/store';
import { hostname, port } from './config';


const app = express();
const server = Server(app);
const io = socket(server);
const store = configureStore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(logger('dev'));
app.use((req, res, next) => {
    next();
});


io.on('connection', socket => {
    console.log('a socket connected:', socket.id);

    socket.on('dispatch action', (action) => {
        store.dispatch(action);
        const callbackAction = {
            type: '@@SOCKET_CALLBACK',
            action,
            _socketCallback: true,
        };
        const externalAction = {
            ...action,
            _socketExternal: true,
        };

        socket.emit('dispatched action', callbackAction);
        socket.broadcast.emit('dispatched action', callbackAction);
        socket.broadcast.emit('dispatch external action', externalAction);
    });

    socket.emit('send initialStore', store.getState());
});


server.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port} in ${app.get('env')} mode`);
});
