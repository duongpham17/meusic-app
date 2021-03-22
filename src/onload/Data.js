import style from '../../style';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { persistUser } from '../redux/actions/authActions';
import * as SecureStore from 'expo-secure-store';

export const Data = ({ auth:{loggedOn}, persistUser }) => {

    useEffect(() => {
        if(!loggedOn){
            (async function(){
                const res = await SecureStore.getItemAsync("jwt")
                if(res === "jwt-exist"){
                    persistUser()
                }
            })()
        }
    }, [loggedOn, persistUser])

    return <Text style={style.hidden}></Text>
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    persistUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
