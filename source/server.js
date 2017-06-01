import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import socket from 'socket.io';
import chalk from 'chalk';
import { hostname, port } from './config';


const app = express();
const server = Server(app);
const io = socket(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));


io.on('connection', socket => {
    console.log('a socket connected');
    socket.on('disconnect', () => console.log('a socket disconnected'));

    socket.on('do ping', function(ping){
        console.log(ping);
        socket.emit('do pong', 'pong');
    });
})

server.listen(port, hostname, () => {
    console.log(`Server started and listening at ${chalk.blue(`http://${hostname}:${port}`)}`);
});
