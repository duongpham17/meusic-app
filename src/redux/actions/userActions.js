import {
    LOAD_USER_DATA,
} from './types';
import Api from '../Api';
import {setAlert} from './alertActions';
const config = { headers:{  "Content-Type" : "application/json" }  };

export const getProfile = () => async dispatch => {
    try{
        const res = await Api.get(`/users/data`);
        dispatch({
            type: LOAD_USER_DATA,
            payload: res.data.user
        })
    } catch(err) {
        console.log('%c Failed to load user data', 'color: red')
    }
}

export const updateProfile = (data) => async dispatch => {
    try{
        const res = await Api.patch(`/users/account`, data, config);
        dispatch({
            type: LOAD_USER_DATA,
            payload: res.data.user
        })
        dispatch(setAlert("updated", "success", 1000))
    } catch(err) {
        console.log('%c Failed to load user data', 'color: red')
    }
}

export const updatePassword = (data) => async dispatch => {
    try{
        const res = await Api.patch(`/users/account/password`, data, config);
        dispatch({
            type: LOAD_USER_DATA,
            payload: res.data.user
        })
        dispatch(setAlert('Password updated.', 'success'))
    } catch(err) {
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}