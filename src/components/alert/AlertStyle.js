import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    hidden:{
        display: "none",
    },
    container: select => ({
        position: 'absolute',
        top : 40,
        zIndex: 1,
        padding: 6,
        right: 5,
        backgroundColor: select === "success" ? "#39CA39" : "#EA2323",
        borderRadius: 5,
    }),
    text:{
        color:"white",
        textAlign: "center",
        fontSize: 17
    }
});