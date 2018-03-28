import {FETCH_BET} from '../actions/types'

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_BET:
            return {...state, ...action.payload.data};
    }

    return state;
}