import {FETCH_PARTICIPANTS, DELETE_PARTICIPANT, EDIT_PARTICIPANT} from '../actions/types'
import _ from 'lodash';

//State arg is not application state, only the state this reducer is responsible for
export default function (state = null, action) {

    switch(action.type) {
        case FETCH_PARTICIPANTS:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_PARTICIPANT:
            return state;
        case EDIT_PARTICIPANT:
            return state;
        default:
            return state;
    }
}