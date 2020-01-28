import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

export const CreateScr = ({})=>{
    return (
        <View style={style.center}>
            <Text>Create screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})