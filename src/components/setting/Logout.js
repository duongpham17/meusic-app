import style from './LogoutStyle';
import React from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { logout } from '../../redux/actions/authActions';

export const Logout = ({logout, setOpen}) => {   

    const logOut = () => {
        setOpen("home");
        logout()
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button_logout} onPress={() =>  logOut()}><Text style={style.text_logout}>Logout</Text></TouchableOpacity>
        </View> 
    )
}

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(Logout)
