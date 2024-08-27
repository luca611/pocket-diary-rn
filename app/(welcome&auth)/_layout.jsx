import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Index from './index';  
import TabsLayout from '../(tabs)/_layout';
import {vars} from '../../variables';

const RootLayout = () => {
  if(vars.isLogged){
    return <TabsLayout />
  }
  return (
      <Index />
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