import { createStore, combineReducers, applyMiddleware } from 'redux';
import stringLength from 'string-length';
import chalk from 'chalk';


const count = (state = 0, action) => {
    if (action.type === 'INCREMENT_COUNT') {
        return state + 1;
    }
    return state;
};

const loggerMiddleware = store => next => action => {
    const nextState = next(action);
    const messages = [
        `${chalk.bold('action:')} ${chalk.blue(action.type)}`,
        `${chalk.bold('store:')} ${chalk.blue(JSON.stringify(store.getState()))}`,
    ];
    const longestMessage = Math.max(...messages.map(m => stringLength(m)));
    const line = Array(longestMessage + 1).join('-');

    console.log(line);
    messages.forEach(message => console.log(message));
    console.log(line);

    return nextState;
}
const middleware = [
    loggerMiddleware,
]

export const reducers = combineReducers({
    count,
});


export const configureStore = (initialState = {}) => createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware),
);
