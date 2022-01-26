import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import healthRecordCreate from '../graphql/mutation/healthRecordCreate'
import userLogout from '../graphql/mutation/userLogout'

import StepCounter from '../components/StepCounter'


const Profile = ({ navigation }) => {

    const dispatch = useDispatch()

    const [logout] = useMutation(userLogout)
    const [recordCreate, { loading, data }] = useMutation(healthRecordCreate, {
        onCompleted: data => {
            console.log("Health Record Create Data:", data)
        },
        onError: error => {
            console.log("Health Record Create Error:", error.message)
        }
    })

    useEffect(() => {
        recordCreate({ 
            variables: { 
                clientID: "b7430244-fd8f-48cd-8bf7-6ccbe3279a31",
                weight: 72,
                height: 1.69,
                pulse: 85,
                systolicPressure: 122,
                diastolicPressure: 78
            } 
        })
    }, [])

    const handleLogout = () => {
        logout()
        dispatch({ type: 'LOGOUT' })
    }

    return <View style={styles.background}>
        {/* <StepCounter /> */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    background:{
        flex:  1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutBtn: {
        width: "90%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        position: 'absolute',
        bottom: 0
    },
    logoutText: {
        color: "white"
    }
});

export default Profile
