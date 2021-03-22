import style from './AuthenticationStyle';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';


export const Login = ({setScreen, login}) => {    

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = data;

    const onChangeText = (el, e) => setData({...data, [el] : e})

    return (
        <View style={style.container}>
            <Text style={style.header}>Welcome</Text>

            <TextInput style={style.input} placeholderTextColor="white"  placeholder="Email" value={email} onChangeText={(e) => onChangeText("email", e)} />
            <TextInput style={style.input} placeholderTextColor="white" secureTextEntry={true} placeholder="Password" value={password} onChangeText={(e) => onChangeText("password", e)} />

            <TouchableOpacity style={style.button} onPress={() => email.includes("@") && password.length >= 8 ? login(data) : ""}><Text style={style.button_text}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={style.button_forgotpassword} onPress={() => setScreen("forgotpassword")}><Text style={style.text_screen}>Forgot password</Text></TouchableOpacity>
            <TouchableOpacity style={style.button_screen} onPress={() => setScreen("signup")}><Text style={style.text_screen}>Create an account</Text></TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(Login)

