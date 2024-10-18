import React, { useState,useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {FocusHistory} from './src/features/FocusHistory';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'
import { colors } from './src/utils/colors';

export default function App() {
  const [currentFocus, setCurrentFocus] = useState( );
  const [focusHistoryArr,setFocusHistoryArr]=useState(['item']);

 
  return (
    <SafeAreaView style={styles.container}>
      {currentFocus ? (
        <Timer
        focusSubject={currentFocus}
        ontTimerEnd={(subject)=>{setFocusHistoryArr(prevFocusHistory=>[...prevFocusHistory,subject])}}
        clearSubject={()=>{setCurrentFocus(null)}}
        />
      ) : (
        <>
        <Focus addFocus={setCurrentFocus} />
        <FocusHistory focusHistoryArr={focusHistoryArr} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
   
  },
  currentFocus: {
    padding: 30,
  },
  textCurrentFocus: {
    color: colors.white,
  },
});
