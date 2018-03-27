import {FETCH_BETS} from '../actions/types'
import _ from 'lodash';

//State arg is not application state, only the state this reducer is responsible for
export default function (state = null, action) {
    switch(action.type) {
        case FETCH_BETS:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}