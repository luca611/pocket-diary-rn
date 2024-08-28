import React from 'react';
import index from './index'; // Replace '.' with the correct component path
import useAuth from '../hooks/useAuth';
// import { NavigationContainer } from '@react-navigation/native';
import Register from './(welcome&auth)/register'; 
import Login from './(welcome&auth)/login';

import Home from './(tabs)/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import _authLayout from './(welcome&auth)/_layout';
import TabsLayout from './(tabs)/_layout';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  const { user } = useAuth; // Set a default empty object if useAuth returns undefined

  if (user) {
    return (
      TabsLayout()
    );
  }
  else {
    return (
      _authLayout()
    );
  }
};

export default RootLayout;