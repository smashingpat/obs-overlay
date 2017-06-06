import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
} from '../constants/action-types';


export const incrementCount = () => ({ type: INCREMENT_COUNT });
export const decrementCount = () => ({ type: DECREMENT_COUNT });
