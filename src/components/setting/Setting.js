import style from './SettingStyle';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Logout from './Logout';
import Profile from './Profile';
import Password from './Password';

export const Setting = ({setOpen}) => { 

    return (
        <SafeAreaView>
            <Logout setOpen={setOpen} />
            <Profile  />
            <Password  />
        </SafeAreaView>
    )
}

export default Setting

