import * as actionTypes from './actionTypes';

export const sendContactSuccess = (contactData) => {
    return {
        type: actionTypes.SEND_CONTACT,
        contactData: contactData,
    };
};

export const sendContactStart = () => {
    return {
        type: actionTypes.SEND_CONTACT_START,
    };
};

export const sendContact = (firstName, lastName, email, message) => {
    return {
        type: actionTypes.SEND_CONTACT_START,
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    };
};
