import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
} from '../../constants/action-types';

const count = (state = 0, action) => {
    if (action.type === INCREMENT_COUNT) {
        return state + 1;
    }
    return state;
};

export default count;
