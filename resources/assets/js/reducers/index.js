import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import BetsReducer from './reducer_bets';
import BetReducer from './reducer_bet';
import ParticipantReducer from './reducer_participant';
import ParticipantsReducer from './reducer_participants';

const rootReducer = combineReducers({
    form: formReducer,
    bets: BetsReducer,
    bet: BetReducer,
    participants: ParticipantsReducer,
    participant: ParticipantReducer
});

export default rootReducer;