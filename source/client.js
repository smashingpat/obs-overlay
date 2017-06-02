import io from 'socket.io-client';
import { configureStore } from './core/store';
import { hostname, port } from './config';



const socket = io(`http://${hostname}:${port}`);

socket.on('send initialStore', initialStore => {
    const store = configureStore(initialStore);
    console.log(store.getState());
});
socket.on('do pong', val => console.log(val));
socket.on('connection', () => {
    console.log('connected');
    const store = configureStore;
})


const dispatch = action => {
    socket.emit('dispatch action', action);
};

const button = document.getElementById('button');
const onClickHandler = () => {
    const action = {
        type: 'INCREMENT_COUNT',
    };
    dispatch(action);
};

button.addEventListener('mousedown', onClickHandler);
