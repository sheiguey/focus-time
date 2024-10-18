import React, { useState } from 'react';
import { Text, View, StyleSheet,Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from './Timing'
import {ProgressBar} from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

 const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    4 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
  ];


export const Timer = ({ focusSubject, ontTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress,setProgress] =useState(1)
  const [minutes,setMinutes]=useState(0.2)

  const start=()=>{
    setIsStarted(prevState=>!prevState)
  }

  const onEnd=(reset)=>{
   Vibration.vibrate(PATTERN);
   setProgress(1);
   setIsStarted(false);
   reset();
   ontTimerEnd(focusSubject)
  }

  return (
    <View style={styles.containner}>
      <View style={styles.countdown}>
        <Countdown 
        minutes={minutes}
        isPaused={!isStarted} 
        onProgress={setProgress}
        onEnd ={onEnd}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on :</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>

      </View>
      
      <View style={{ paddingTop: spacing.sm }}>
          <ProgressBar
           progress={progress}
           color={colors.progressBar}
           style={{height:spacing.sm}}
          />
      </View>


      <View style={styles.timingWraper}>
         <Timing onChangeTime={setMinutes}/>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundedButton title={isStarted?"pause":"start"} onPress={start} />
      </View>
      <View style={styles.clearButtonWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containner: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonWrapper:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },

  timingWraper:{
    flex:0.1,
    padding: spacing.lg,
  }
});
