import {
    PERSIST_USER,
    SIGNUP_CONFIRM,
    SIGNUP,
    LOGIN,
    LOGOUT,
    FORGOT_PASSWORD,
} from '../actions/types'

const initialState = {
    loggedOn: false,
    loading: true,
    user: null,
    confirm: null,
    email: false,
    email_address: ""
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case SIGNUP_CONFIRM:
            return{
                ...state,
                confirm: payload,
            }
        case PERSIST_USER:
        case SIGNUP:
        case LOGIN:
            return {
                ...state,
                user: payload,
                loggedOn: true,
                loading: false
        }
        case FORGOT_PASSWORD:
            return{
                ...state,
                email: true,
                email_address: payload
            }
        case LOGOUT: 
            return {
                initialState
            }
        default:
            return state;
        }
}