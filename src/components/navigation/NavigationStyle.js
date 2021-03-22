import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container:{
        zIndex: 100,
        width: '100%', 
        height: 80, 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:40,
        borderColor: "white",
        borderTopWidth: 2,
    },
    hidden:{
        display: "none"
    }
});