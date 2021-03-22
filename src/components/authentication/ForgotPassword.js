import style from './AuthenticationStyle';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/actions/authActions';


export const Login = ({ auth:{email, email_address}, setScreen, forgotPassword}) => {    

    const [data, setData] = useState("");
    const [checkEmail, setCheckEmail] = useState(false);

    const onPress = () => {
        forgotPassword(data);
        setCheckEmail(true);
        setTimeout(() => {setCheckEmail(false)}, 2000);
    }

    return (
        <View style={style.container}>
            {!email ? 
                <View>
                    <Text style={style.header}>Forgot Password</Text>
                    <TextInput placeholderTextColor="white" placeholder="Email Address" style={style.input} onChangeText={(e) => setData(e)} />
                    {checkEmail ? <ActivityIndicator size="large" color="white" style={style.loading} /> : <TouchableOpacity style={style.button_password} onPress={() => data.includes("@") && data.length >= 8 ? onPress() : ""}><Text style={style.button_text}>Send reset link</Text></TouchableOpacity> }
                </View>
            : 
                <View> 
                    <Text style={style.header2}>Password reset Link has been sent to: {data || email_address}</Text>
                </View>
            }
            <TouchableOpacity style={style.button_screen} onPress={() => setScreen("login")}><Text style={style.text_screen}>back to login</Text></TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    forgotPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)