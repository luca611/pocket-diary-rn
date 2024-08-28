/**
 * `GestureHandlerRootView` is a component provided by the `react-native-gesture-handler` library.
 * It is used as a root view for handling gestures in a React Native application.
 * It should be used as a parent component for components that need to recognize gestures.
 * By using `GestureHandlerRootView`, gestures can be properly recognized and handled by the application.
 * For more information, refer to the documentation of `react-native-gesture-handler`.
 */
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity, GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';
import Images from "../../assets/imgaes";

const Register = () => {
    const [secure, setSecure] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const toggleSecure = () => {
        setSecure(!secure);
    };

    return (
        <GestureHandlerRootView >
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.Title}>Register</Text>
                        <View style={styles.line} />
                        <View style={styles.formContainer}>
                            <Text style={styles.tip}>Email</Text>
                            <TextInput style={styles.input} 
                                placeholder="Email"
                                onChangeText={(text) => setEmail(text)}
                             />
                            <Text style={styles.tip}>Password</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholder="Password"
                                    secureTextEntry={secure}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <TouchableOpacity
                                    onPress={toggleSecure}
                                >
                                    <Image source={secure ? Images.show : Images.hide} style={styles.switch} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.tip}>Confirm Password</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholder="Password"
                                    secureTextEntry={secure}
                                    onChangeText={(text) => setConfirmPassword(text)}
                                />
                                <TouchableOpacity
                                    onPress={toggleSecure}
                                >
                                    <Image source={secure ? Images.show : Images.hide} style={styles.switch} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            {/* Sign up button checks that the password is good to be used and email also and add the credentials to the db*/}
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Sign up</Text>
                            </TouchableOpacity>
                            {/* Sign up button */}
                            <TouchableOpacity style={styles.button} onPress={() => router.replace('./login')}>
                                <Text style={styles.buttonText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

export default Register

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#F2EDE5'
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        height: Dimensions.get('window').height,
        width: '100%',
    },

    Title: {
        color: '#B59D75',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    line: {
        width: "50%",
        height: 1,
        backgroundColor: "#B59D75",
        marginTop: '5%',
        marginBottom: '10%',
    },

    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
    },
    tip: {
        color: '#B59D75',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#B59D75',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },

    passwordInput: {
        width: '85%',
        height: '100%',
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },

    passwordContainer: {
        width: '100%',
        height: 40,
        borderColor: '#B59D75',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
    },

    buttonsContainer: {
        marginTop: '20%',
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
    switch: {
        width: 35,
        height: 35,
    }

})