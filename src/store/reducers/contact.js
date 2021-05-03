import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contacts: [],
};

const sendContactStart = (state, action) => {
    return { ...state };
};

const sendContactSuccess = (state, action) => {
    return { ...state, contacts: action.contactData };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_CONTACT_START:
            return sendContactStart(state, action);
        case actionTypes.SEND_CONTACT_SUCCESS:
            return sendContactSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
