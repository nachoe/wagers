import {FETCH_PARTICIPANT} from '../actions/types'

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_PARTICIPANT:
            return {...state, ...action.payload.data }
    }

    return state;
}