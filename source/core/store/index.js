import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';


const count = (state = 0, action) => {
    if (action.type === 'INCREMENT_COUNT') {
        return state + 1;
    }
    return state;
};

const loading = (state = 0, action) => {
    switch (action.type) {
    case 'LOADING_PENDING':
        return state + 1;
    case 'LOADING_DONE':
        return state - 1;
    default:
        return state;
    }
}

export const reducers = combineReducers({
    count,
    loading,
});

const loggerMiddleware = process.env.NODE_ENV === 'server' ?
    store => next => action => {
        const nextState = next(action);
        const messages = [
            `action: ${JSON.stringify(action)}`,
            `store: ${JSON.stringify(store.getState())}`,
        ];
        const longestMessage = Math.max(...messages.map(m => m.length));
        const line = Array(longestMessage + 1).join('-');

        console.log(line);
        messages.forEach(message => console.log(message));
        console.log(line);

        return nextState;
    } :
    createLogger({ collapsed: true });

const socketMiddleware = socket => store => next => action => {
    if (socket) {
        if (action._socketCallback) {
            next({ type: 'LOADING_DONE' });
            return;
        }

        if (!action._socketExternal) {
            socket.emit('dispatch action', action);
        }
        next({ type: 'LOADING_PENDING' });
        next(action);

        return;
    }
    next(action);
}

const defaultOptions = {
    initialState: {},
    socket: null,
};
export const configureStore = (opts = {}) => {
    const { socket, initialState } = Object.assign({}, defaultOptions, opts);
    const middleware = [
        loggerMiddleware,
        socketMiddleware(socket),
    ];

    if (socket) {
        socket.on('dispatch external action', action =>  {
            store.dispatch(action);
        });
        socket.on('dispatched action', action => {
            store.dispatch(action);
        });
    }

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware),
    );

    return store;
}
