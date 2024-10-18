import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import {fontSizes,spacing} from '../utils/sizes'

export const FocusHistory = ({ focusHistoryArr }) => {
  const renderItem =({ item }) => <Text style={style.text}>- {item}</Text>
  if(!focusHistoryArr || focusHistoryArr.length===0)return null
  return (
    <View style={style.focusHistoy}>
      <Text style={style.title}>Things we've focused on :</Text>
      <FlatList
        data={focusHistoryArr}
        renderItem={renderItem}
      />
    </View>
  );
};

const style = StyleSheet.create({
  focusHistoy: {
    marginTop: '2em',
    flex:1,
    paddingTop:'1.5rem',
    paddingLeft:spacing.lg

  },
  text: {
    color: colors.white,
    fontSize:'meduim',
    paddingTop:spacing.sm
  },
  title:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:fontSizes.md
  }
});
