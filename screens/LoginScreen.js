import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper"
import {Image, KeyboardAvoidingView, StyleSheet, View} from "react-native";
import { auth } from "../firebase"; // auth should only come from firebase.js (config file)
import { signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then(userCredentials => {
                const user = userCredentials.user
                navigation.navigate("Manager")
            })
            .catch(error => alert(error.message))
    }

    const signupHandler = () => {
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user
            })
        navigation.navigate("Manager")
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image style={styles.banner} source={require('../assets/banner.png')}/>
            <View style={styles.inputContainer}>
                <TextInput
                    mode="outlined"
                    placeholder="Username"
                    value={username}
                    style={styles.input}
                    outlineStyle={{borderColor: "#dbddde", borderRadius: 8}}
                    // theme={{colors: {onSurfaceVariant: '#4790eb' }}} // to change color of placeholder
                    keyboardType={"email-address"}
                    onChangeText={(text) => setUsername(text)}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    autoComplete={"off"}
                />
                <TextInput
                    mode="outlined"
                    placeholder="Password"
                    value={password}
                    style={styles.input}
                    outlineStyle={{borderColor: "#dbddde", borderRadius: 8}}
                    // theme={{colors: {onSurfaceVariant: '#4790eb' }}}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    autoComplete={"off"}
                />
            </View>

            <Button mode="contained" style={styles.buttons} onPress={loginHandler}>Login</Button>
            <Button mode="flat" style={styles.buttons} onPress={signupHandler}>Sign up</Button>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7fcff"
    },
    inputContainer: {
        width: "100%",
        marginTop: 25,
        marginBottom: 15
    },
    input: {
        // height: 45,
        // width: "100%",
        // borderWidth: 0,
        // borderRadius: 4,
        // backgroundColor: "gainsboro",
        // padding: 10,
        fontSize: 14,
        height: 40,
        marginBottom: 1
    },
    buttons: {
        width: "50%",
        marginBottom: 5
    },
    banner: {
        // backgroundColor: 'pink',
        width: '90%',
        height: '10%',
        resizeMode: 'contain'

    }
})

export default LoginScreen