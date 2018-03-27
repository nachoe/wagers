import {VIEW_BET} from '../actions/types'
import _ from 'lodash';

//State arg is not application state, only the state this reducer is responsible for
export default function (state = null, action) {
    switch(action.type) {
        case VIEW_BET:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}