import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { sendContactSaga } from './contact';

export function* watchContact() {
    yield takeEvery(actionTypes.SEND_CONTACT, sendContactSaga);
}
