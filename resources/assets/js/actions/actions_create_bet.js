import {CREATE_BET} from './types'

export function createBet(data) {
    return {
        type: CREATE_BET,
        payload: data
    };
}