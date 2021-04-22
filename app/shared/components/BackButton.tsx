import React from 'react'
import {TouchableOpacity, Text } from 'react-native'
import {style} from '../../style/style'

export default function BackButton({onPress}:any, {history}:any) {
    return (
        <TouchableOpacity onPress={onPress} style={style.backButton}>
            <Text style={style.backButtonText}>Back</Text>
        </TouchableOpacity>
    )
}
