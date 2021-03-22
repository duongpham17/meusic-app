import {
    LOAD_USER_DATA,
} from '../actions/types'

const initialState = {
    user: null,
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case LOAD_USER_DATA:
            return {
                ...state,
                user: payload,
                loading: false
            }
        default:
            return state;
        }
}