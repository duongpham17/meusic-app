import React, {useState} from 'react';

import style from './style'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

// redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

// onload
import Data from './src/onload/Data';

// home
import Home from './src/components/home/Home';

// setting
import Setting from './src/components/setting/Setting';

import Alert from './src/components/alert/Alert';

import Navigation from './src/components/navigation/Navigation';

export default function App() {

  const [open, setOpen] = useState("home");

  const render = (s) => {
    switch(s){
      
      case 'home':
          return <Home />
      case 'setting':
          return <Setting setOpen={setOpen} />

      default:
          return <Home />
    }
}

  return (
    <Provider store={store}>
      
        <Alert />
        <Data />
        <Navigation setOpen={setOpen} open={open}/>

        <View style={style.background}>
            {render(open)}
        </View>

    </Provider>
  );
}
