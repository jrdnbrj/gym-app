import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import UserLogin from '../graphql/mutation/userLogin'


const Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [userLogin, { loading, data }] = useMutation(UserLogin, {
        onCompleted: data => {
            console.log("Login Data:", data)
            dispatch({ type: 'LOGIN' })
        },
        onError: error => {
            console.log("Login Error:", error.message)
            setErrorMsg(error.message)
        }
    })

    const handleLogin = () => {
        setErrorMsg('')

        userLogin({ variables: { email, password } })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Radikal Gym</Text>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Contraseña..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>{loading ? 'Iniciando' : 'Iniciar'} Sesión</Text>
            </TouchableOpacity>
            {errorMsg !== '' && 
                <TouchableOpacity>
                    <Text style={styles.error}>{errorMsg}</Text>
                </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:  1,
        backgroundColor: '#0D6EFD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    error: {
        color: "white",
        fontSize: 15
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});

export default Login
