import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './core/store';
import { hostname, port } from './config';
import { socket } from './core/socket';
import Root from './view/root';


socket.on('send initialStore', (initialState) => {
    const store = configureStore({
        initialState,
        socket,
    });

    render(
        <Root store={store} />,
        document.getElementById('mount'),
    );
});
