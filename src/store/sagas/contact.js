import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* sendContactSaga(action) {
    yield put(actions.sendContactStart());
    try {
        let res = {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            message: action.message,
        };
        yield put(actions.sendContactSuccess(res));
    } catch {
        console.log('this is an error');
    }
}
