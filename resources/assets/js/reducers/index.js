import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import BetReducer from './reducer_bets'
import ViewBetReducer from './reducer_view_bet'

const rootReducer = combineReducers({
    form: formReducer,
    bets: BetReducer,
    view_bet: ViewBetReducer,
});

export default rootReducer;