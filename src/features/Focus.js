import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {RoundedButton} from '../components/RoundedButton'
import {TextInput} from 'react-native-paper'
import {spacing} from "../utils/sizes"

import {colors} from '../utils/colors'

export const Focus = ({addFocus})=>{
const [subject,setSubject]=useState(null);

return(
  <View style={styles.container}>
  <View style={styles.inputContainer}>
    <TextInput 
    style={styles.inputText}
    label="What would you like to focus on?" 
    value={subject}
    onChangeText={subject=>setSubject(subject)}
    />
    <RoundedButton size={50} title="+" onPress={()=>addFocus(subject)} />
  </View>  
  </View>
)
}


const styles = StyleSheet.create({
  container:{
    flex:0.1
  },
  inputContainer:{
    padding:spacing.lg,
    justifyContent:'top',
    flexDirection:'row',
    alignItems:'center'
  },
  
  inputText:{
    flex:0.99,
    marginRight:spacing.sm
  }

})

