import style from './AuthenticationStyle';

import React, { useState } from 'react'; 
import { ActivityIndicator, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { signupConfirm, signup } from '../../redux/actions/authActions';
import { setAlert } from '../../redux/actions/alertActions';

export const Signup = ({ auth:{confirm}, signupConfirm, signup, setAlert, setScreen}) => {    

    const [checkEmail, setCheckEmail] = useState(false);
    const [required, setRequired] = useState([]);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        code: (10000 + Math.random() * 99999).toFixed(0),
        check_code: "",
    })
    const {name, email, password, check_code, code} = data;

    const onChangeText = (el, e) => setData({...data, [el] : e})

    const onPress_signupConfirm = () => {
        if(name.length < 3 || name.length > 16) return setRequired([...required, "name"]);

        if(!email.includes("@")) return setRequired([...required, "email"]);
    
        if(password.length < 8) return setRequired([...required, "password"]);

        signupConfirm(data);

        setCheckEmail(true);

        setTimeout(() => {setCheckEmail(false)}, 3000);
    }

    const onPress_signup = () => {
        if(check_code === code){
            signup(data)
        } else {
            setAlert("Code is incorrect", "bad")
        }
    }

    return (
        <View>
            {!confirm ?
                <View style={style.container}>
                    <Text style={style.header}>Create Account</Text>

                    <TextInput style={style.input} placeholderTextColor="white"  placeholder="Name" value={name} onChangeText={(e) => onChangeText("name", e)} />
                    {required.includes("name") && (name.length < 3 || name.length > 16) ? <Text style={style.text_required}>Name must be between 3 and 16 characters</Text> : <Text></Text>}

                    <TextInput style={style.input} placeholderTextColor="white"  placeholder="Email Address" value={email} onChangeText={(e) => onChangeText("email", e)} />
                    {required.includes("email") && email.length < 8 ? <Text style={style.text_required}>Email must have @ and 8 characters</Text> : <Text></Text>}

                    <TextInput style={style.input} placeholderTextColor="white" secureTextEntry={true} placeholder="Password" value={password} onChangeText={(e) => onChangeText("password", e)} />
                    {required.includes("password") && password.length < 8 ? <Text style={style.text_required}>Password must have 8 characters</Text> : <Text></Text>}

                    {checkEmail ? <ActivityIndicator size="large" color="white" style={style.loading} /> : <TouchableOpacity style={style.button} onPress={() => onPress_signupConfirm()}><Text style={style.button_text}>Verify</Text></TouchableOpacity> }
                    <TouchableOpacity style={style.button_screen} onPress={() => setScreen("login")}><Text style={style.text_screen}>Already got an account</Text></TouchableOpacity>
                </View>  
            : 
                <View style={style.container}>
                    <Text style={style.header2}>Code sent to {email}</Text>
                    <TextInput style={style.input} placeholderTextColor="white" placeholder="Enter Code " onChangeText={(e) =>  onChangeText("check_code", e)}/>
                    <TouchableOpacity style={style.button} onPress={() => onPress_signup()}><Text style={style.button_text}>Confirm</Text></TouchableOpacity>
                </View>  
            }
        </View>
    )
}


const mapStateToProps = (state) => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    signupConfirm,
    signup,
    setAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

