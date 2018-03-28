import axios from 'axios';

import {FETCH_PARTICIPANTS, FETCH_PARTICIPANT, CREATE_PARTICIPANT, DELETE_PARTICIPANT, EDIT_PARTICIPANT} from './types'

export function fetchParticipants() {

    const request = axios.get('/api/participants');

    return {
        type: FETCH_PARTICIPANTS,
        payload: request
    };
}

export function fetchParticipant(bet_id) {

    const request = axios.get(`/api/participants/view/${bet_id}`);

    return {
        type: FETCH_PARTICIPANT,
        payload: request
    };
}

export function createParticipant(values, callback) {

    const request = axios.post('/api/participants/create', values)
        .then(() => callback());

    return {
        type: CREATE_PARTICIPANT,
        payload: request
    }
}

export function deleteParticipant(bet_id, callback) {

    axios.post(`/api/participants/delete/${bet_id}`)
        .then(() => callback());

    return {
        type: DELETE_PARTICIPANT,
        payload: bet_id
    }
}

export function updateParticipant(values, bet_id, callback) {

    axios.post(`/api/participants/edit/${bet_id}`, values)
        .then(() => callback());

    return {
        type: EDIT_PARTICIPANT,
        payload: bet_id
    }
}