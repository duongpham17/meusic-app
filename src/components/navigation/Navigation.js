import style from './NavigationStyle';

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { FontAwesome5, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

export const Navigation = ({auth:{loggedOn}, setOpen, open}) => {

    return (
        <View style={loggedOn ? style.container : style.hidden}>
            <AntDesign name="home"            size={30} color={open === "home" ? "#2ebc9d" : "white"} onPress={() => setOpen("home")} />
            <FontAwesome5 name="compact-disc" size={30} color={open === "" ? "#2ebc9d" : "white"} />
            <Entypo name="folder-music"       size={30} color={open === "" ? "#2ebc9d" : "white"} />
            <FontAwesome name="navicon"       size={30} color={open === "setting" ? "#2ebc9d" : "white"} onPress={() => setOpen("setting")} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

export default connect(mapStateToProps)(Navigation)
