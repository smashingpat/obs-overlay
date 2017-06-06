import {
    LOADING_PENDING,
    LOADING_DONE,
} from '../../constants/action-types';

const loading = (state = 0, action) => {
    switch (action.type) {
    case LOADING_PENDING:
        return state + 1;
    case LOADING_DONE:
        return state - 1;
    default:
        return state;
    }
};

export default loading;
