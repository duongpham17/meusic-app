import style from '../../../style';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Authentication from '../authentication/Authentication';

export const Home = ({ auth:{loggedOn} }) => {   

    return (
        <SafeAreaView>
            {!loggedOn ? 
            <Authentication />
            :
            <View style={style.container}>
                <Text style={{color:"white"}}>Hello</Text>
            </View> 
            }
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

export default connect(mapStateToProps)(Home)

