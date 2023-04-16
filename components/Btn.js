import {Image, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({backgcol,onPress,}) => {
  return (
    <View>
    <TouchableOpacity
    style={{
        backgroundColor:backgcol,
        width:70,
        height:50,     
    }} onPress={onPress}
    >

    </TouchableOpacity>
    </View>
  )
}
export default Btn;