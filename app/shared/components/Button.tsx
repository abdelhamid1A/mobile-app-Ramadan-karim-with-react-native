import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Button({onPress,title}:any) {
    return (
        <LinearGradient
    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
    // start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={style.linear}
    >

        <TouchableOpacity onPress={onPress}>
            <Text style={style.btn}>{title}</Text>
        </TouchableOpacity>
    </LinearGradient>
    )
}

const style = StyleSheet.create({
    btn:{
        backgroundColor:'#fff',
        color:'#000',
        padding:8,
        borderRadius:24,
        width:215,
        textAlign:'center',
        height:45
        // borderColor:LinearGradient('blue', 'white')
    },
    linear:{
        height: 48,
         width: 220,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius:24
    }
})
