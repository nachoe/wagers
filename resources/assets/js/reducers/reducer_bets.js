import {FETCH_BETS, DELETE_BET, EDIT_BET} from '../actions/types'
import _ from 'lodash';

//State arg is not application state, only the state this reducer is responsible for
export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_BETS:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_BET:
            return state;
        case EDIT_BET:
            return state;
        default:
            return state;
    }
}