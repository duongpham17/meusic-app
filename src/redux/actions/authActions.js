import {
    PERSIST_USER,
    SIGNUP_CONFIRM,
    SIGNUP,
    LOGIN,
    LOGOUT,
    FORGOT_PASSWORD
} from './types';
import Api from '../Api';
import {setAlert} from './alertActions';
import * as SecureStore from 'expo-secure-store';
const config = { headers:{  "Content-Type" : "application/json" }  };

//login in user
export const persistUser = () => async dispatch => {
    try{
        const res = await Api.get(`/users`);
        dispatch({
            type: PERSIST_USER,
            payload: res.data
        });
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}

//confirm email is owners
export const signupConfirm = (data) => async dispatch => {
    try{
        const res = await Api.post(`/users/signup/confirm`, data, config);
        dispatch({
            type: SIGNUP_CONFIRM,
            payload: res.data.user
        });
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}

//signup
export const signup = (data) => async dispatch => {
    try{
        const res = await Api.post(`/users/signup`, data, config);
        dispatch({
            type: SIGNUP,
            payload: res.data.user
        })
        await SecureStore.setItemAsync("jwt", (Date.now() + 365 * 24 * 60 * 60 * 1000));
        dispatch(setAlert("Welcome to Meusic", "success"))
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}

//login
export const login = (data) => async dispatch => {
    try{
        const res = await Api.post(`/users/login`, data, config);
        dispatch({
            type: LOGIN,
            payload: res.data.user
        })
        await SecureStore.setItemAsync("jwt", "jwt-exist");
        dispatch(setAlert("Welcome back", "success"))
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}

//logout
export const logout = () => async dispatch => {
    try {
        await Api.get(`/users/logout`)
        dispatch({
            type: LOGOUT
        })
        await SecureStore.deleteItemAsync("jwt");
        dispatch(setAlert('Logged out', 'success'))
    } catch (err) {
        dispatch(setAlert('Something went wrong... Try again', 'danger'))
    }
}

//Send forgotten password
export const forgotPassword = (email) => async dispatch => {
    try{
        await Api.post(`/users/forgotpassword`, {email}, config)
        dispatch({
            type: FORGOT_PASSWORD,
            payload: email
        });
        await SecureStore.deleteItemAsync("jwt");
    } catch (err) {
        dispatch(setAlert(err.response.data.message || err.response.data, 'danger'))
    }
}