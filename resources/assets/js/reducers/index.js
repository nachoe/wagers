import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import BetsReducer from './reducer_bets';
import BetReducer from './reducer_bet';

const rootReducer = combineReducers({
    form: formReducer,
    bets: BetsReducer,
    bet: BetReducer,
});

export default rootReducer;