import { StyleSheet,Text } from 'react-native'
import React from 'react'

import {colors} from '../../config/colors'

const { success, fail} = colors;




const MsgBox = (props) => {
  return (
   <Text style={{fontSize:13,textAlign:"center", color:props.success ? success : fail}}>{props.children}</Text>
  )
}

export default MsgBox

const styles = StyleSheet.create({})