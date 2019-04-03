import axios from 'axios';
import { APIKEY } from '../../Keys/GoogleApiKey';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (responseData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: responseData
    }
};


export const authFailure = (error) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';
        
        if (isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=';
        }

        axios.post(`${url}${APIKEY}`, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFailure(err));
            });
    };
};

