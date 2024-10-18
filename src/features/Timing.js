import React from 'react';
import {View,StyleSheet} from 'react-native'
import {RoundedButton} from '../components/RoundedButton'

export const Timing=({onChangeTime})=>{

  return (
    <View style={styles.timingButton}>
      <RoundedButton   onPress={()=>onChangeTime(10)} title='10' size={75}/>
      <RoundedButton   onPress={()=>onChangeTime(15)} title='15' size={75}/>
      <RoundedButton   onPress={()=>onChangeTime(20)} title='20' size={75}/>
    </View>
  )
}

const styles = StyleSheet.create({
   timingButton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      gap:'2.5rem'
   }
})