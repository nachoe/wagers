import {FETCH_BET} from '../actions/types'

//State arg is not application state, only the state this reducer is responsible for
export default function (state = null, action) {
    switch(action.type) {
        case FETCH_BET:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            return {...state, ...action.payload.data }
    }

    return state;
}