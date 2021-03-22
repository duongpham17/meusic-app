import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Signup from './Signup';

export const Authentication = (props) => {
    const [screen, setScreen] = useState("login");

    const render = (s) => {
        switch(s){
            case 'login':
                return <Login setScreen={setScreen} />
            case 'signup':
                return <Signup setScreen={setScreen} />
            case 'forgotpassword':
                return <ForgotPassword setScreen={setScreen} />
            default:
                return <Login setScreen={setScreen} />
        }
    }

    return (
        <View>
            {render(screen)}
        </View>
    )
}

export default Authentication
