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
        // recordCreate({ 
        //     variables: { 
        //         clientID: "8bd8fbb6-82c4-4dae-a83b-6c539cb2d486",
        //         weight: 50,
        //         height: 60,
        //         pulse: 70,
        //         systolicPressure: 120,
        //         diastolicPressure: 80
        //     } 
        // })
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
