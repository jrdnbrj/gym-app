import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import healthRecordCreate from '../graphql/mutation/healthRecordCreate'
import userLogout from '../graphql/mutation/userLogout'

import StepCounter from '../components/StepCounter'
import HealthRecords from '../components/HealthRecords'


const Profile = ({ user }) => {

    const dispatch = useDispatch()

    const [logout] = useMutation(userLogout)

    const handleLogout = () => {
        logout()
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.background}>
                {/* <StepCounter /> */}
                {/* {user.isClient && <StepCounter />} */}
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </TouchableOpacity>
                {(user.isAdmin || user.isInstructor) ? 
                    <HealthRecords user={user} /> : 
                    <StepCounter />}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background:{
        flex:  1,
        alignItems: 'center',
        // justifyContent: 'center',
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
        // position: 'absolute',
        // bottom: 0
    },
    logoutText: {
        color: "white"
    }
});

export default Profile
