import style from './SettingStyle';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import {updatePassword} from '../../redux/actions/userActions';

export const Password = ({updatePassword}) => {   

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const [data, setData] = useState({
        password: "",
        passwordCurrent: ""
    })

    const {passwordCurrent, password} = data;

    const onChangeText = (el, e) => {
        setData({...data, [el] : e});
        if(!edit) setEdit(true);
    }

    const onPress = () => {
        if(password.length < 8) return
        updatePassword(data);
        setEdit(false);
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={open ? style.button_open : style.button} onPress={() => setOpen(!open)}><Text style={open ? style.text_open : style.text}>{open ? "Close - Password" : "Change Password"}</Text></TouchableOpacity>
            <View style={open ? style.show : style.hidden}>
                <Text style={style.text}>Enter your current password</Text> 
                <TextInput style={style.input} secureTextEntry={true} value={passwordCurrent} onChangeText={(e) => onChangeText("passwordCurrent", e)} placeholderTextColor="white" placeholder="......" /> 

                {passwordCurrent.length >= 8 ? <TextInput style={style.input} value={password} placeholderTextColor="white" placeholder="Enter new password" secureTextEntry={true} onChangeText={(e) => onChangeText("password", e)}/> : <Text></Text>}
                {password.length < 8 && passwordCurrent.length >= 8? <Text style={style.text_required}>Password must have more than 8 characters</Text> : <Text></Text>}

                {edit && password.length >= 8 && passwordCurrent.length >= 8 ? <TouchableOpacity style={style.button_save} onPress={() => onPress()}><Text style={style.text}>Save</Text></TouchableOpacity> : <Text></Text>}
            </View>
        </View> 
    )
}

const mapStateToProps = state => ({
    user: state.userReducers
})

const mapDispatchToProps = {
    updatePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Password)