import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootLayout from '../(welcome&auth)/_layout'
import { vars } from '../../variables'
import { Slot } from 'expo-router'
import Home from './home'

const TabsLayout = () => {
    //if the user get here and is not logged, redirect to the welcome page for login 
    if(!vars.isLogged) {
        return <RootLayout />
    }
    
    //if the user is logged, show the home page
    return (
        <View style={styles.container}>
            <Home/>
        </View>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
})