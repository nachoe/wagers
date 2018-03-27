import {FETCH_BETS} from './types'
import {VIEW_BET} from './types'
import bets from '../reducers/reducer_bets';

export function fetchBets(data) {
    return {
        type: FETCH_BETS,
        payload: data
    };
}

export function viewBet() {
    let data = bets();

    return {
        type: VIEW_BET,
        payload: data
    };
}