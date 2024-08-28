import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../assets/imgaes";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo of the app */}
      <Image source={Images.logo} style={styles.mainImg}/>
      {/* texts ad other decorative stuf */}
      <Text style={[styles.title, styles.colored]}> Welcome to your</Text>
      <Text style={styles.title}>pocket diary</Text>
      <View style={styles.line}/>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>

        {/* Sign in button */}
        <TouchableOpacity style={styles.button} onPress={() => router.replace('./login')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Sign up button */}
        <TouchableOpacity style={styles.button} onPress={() => router.replace('./register')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#F2EDE5',
  },
  mainImg: {
    width: '80%',
    height: '35%',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginTop: 0,
  },
  colored: {
    marginTop: 20,
    color: "#B59D75",
  },
  line: {
    width: "50%",
    height: 1,
    backgroundColor: "#B59D75",
    marginTop: 20,
    marginBottom: 20,
  },

  buttonsContainer: {
    marginTop: '30%',
    width: "80%",
  },

  button: {
    backgroundColor: "#B59D75",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  
});