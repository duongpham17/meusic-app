import style from './SettingStyle';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { getProfile, updateProfile } from '../../redux/actions/userActions';

export const Profile = ({user:{user}, getProfile, updateProfile}) => {   

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const [data, setData] = useState({
        name: user?.name
    })
    const {name} = data;

    useEffect(() => {
        if(!user) getProfile()
    }, [getProfile, user]);

    const onChangeText = (el, e) => {
        setData({...data, [el] : e});
        if(!edit) setEdit(true)
    }

    const onPress = () => {
        if(name.length < 3 || name.length > 16) return
        updateProfile(data);
        setEdit(false)
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={open ? style.button_open : style.button} onPress={() => setOpen(!open)}><Text style={open ? style.text_open : style.text}>{open ? "Close - Profile" : "Profile"}</Text></TouchableOpacity>
            <View style={open ? style.show : style.hidden}>
                <Text style={style.text_des}>Email</Text>
                <Text style={style.text}>{user?.email}</Text>
                <Text style={style.text_des}>Name</Text>
                <TextInput style={style.input} value={name} onChangeText={e => onChangeText("name", e)} />
                {name.length < 3 || name.length > 16 ? <Text style={style.text_required}>Name must be between 3 and 16 characters</Text> : <Text></Text>}

                {edit ? <TouchableOpacity style={style.button_save} onPress={() => onPress()}><Text style={style.text}>Save</Text></TouchableOpacity> : <Text></Text> }
            </View>
        </View> 
    )
}

const mapStateToProps = state => ({
    user: state.userReducers
})

const mapDispatchToProps = {
    getProfile,
    updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)