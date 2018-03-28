import axios from 'axios';

import {FETCH_BETS, FETCH_BET, CREATE_BET, DELETE_BET, EDIT_BET} from './types'

export function fetchBets() {

    const request = axios.get('/api/bets');

    return {
        type: FETCH_BETS,
        payload: request
    };
}

export function fetchBet(bet_id) {

    const request = axios.get(`/api/bet/view/${bet_id}`);

    return {
        type: FETCH_BET,
        payload: request
    };
}

export function createBet(values, callback) {

    const request = axios.post('/api/bet/create', values)
        .then(() => callback());

    return {
        type: CREATE_BET,
        payload: request
    }
}

export function deleteBet(bet_id, callback) {

    axios.post(`/api/bet/delete/${bet_id}`)
        .then(() => callback());

    return {
        type: DELETE_BET,
        payload: bet_id
    }
}

export function updateBet(values, bet_id, callback) {

    axios.post(`/api/bet/edit/${bet_id}`, values)
        .then(() => callback());

    return {
        type: EDIT_BET,
        payload: bet_id
    }
}