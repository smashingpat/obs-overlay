import { combineReducers } from 'redux';

import count from './count';
import loading from './loading';


const reducers = combineReducers({
    count,
    loading,
});

export default reducers;
