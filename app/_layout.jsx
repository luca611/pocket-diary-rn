import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Index from '.';  
import TabsLayout from './(tabs)/_layout';
import {vars} from '../variables';
import { Slot } from 'expo-router';
/*
if(vars.isLogged){
    return <TabsLayout />
  }
*/
const RootLayout = () => {
  
  return (
    <Slot name="index"/>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});