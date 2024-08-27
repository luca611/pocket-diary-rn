import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const _authLayout = () => {
    return (
        <View style={styles.fullScreen}>
            <Slot />
        </View>
    )
}

export default _authLayout

const styles = StyleSheet.create({
    fullScreen:{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor:'#F2EDE5',
    }
})