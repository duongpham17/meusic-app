import style from './AlertStyle';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const Alert = ({alert}) => 
    <View style={alert.length === 0 ? style.hidden : style.container(alert?.alertType)}>
        <Text style={style.text}>{alert?.msg}</Text>
    </View>

const mapStateToProps = state => ({
    alert: state.alertReducers
});

export default connect(mapStateToProps)(Alert)