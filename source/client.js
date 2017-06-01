import io from 'socket.io-client';
import { hostname, port } from './config';


const socket = io(`http://${hostname}:${port}`);

socket.on('connect', () => console.log('connected'));
socket.on('do pong', val => console.log(val));

const button = document.getElementById('button');
const onClickHandler = () => {
    socket.emit('do ping', 'ping!');
};

button.addEventListener('mousedown', onClickHandler);
