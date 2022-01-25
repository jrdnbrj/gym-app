import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'


const days = {
    Monday: 'Lu', Tuesday: 'Ma', Wednesday: 'Mi', Thursday: 'Ju', 
    Friday: 'Vi', Saturday: 'Sa', Sunday: 'Do'
}

const ModalView = ({ visible, closeModal, name, emoji, instructor, startDate, dayss, price, quotas }) => {

    const getDays = () => {
        return dayss.map(day => {
            return (
                <View style={styles.day}>
                    <Text style={styles.dayText}>{days[day]}</Text>
                </View>
            )
        })
    }

    const getSchedule = startDate => {
        const date = new Date(startDate);
        let hours = date.getUTCHours();
        hours = hours < 10 ? `0${hours}:00` : `${hours}:00`;

        return hours
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={styles.x} onPress={closeModal}>
                        <Text style={styles.xText}>X</Text>
                    </Pressable>
                    <View style={styles.rowTitle}>
                        <Text style={styles.text}>Clase de </Text>
                        <Text style={styles.title}>{name} {emoji}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.title}>Instructor: </Text>
                        <Text style={styles.text}>{instructor}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.title}>Horario: </Text>
                        <Text style={styles.text}>{getSchedule(startDate)} {getDays()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.title}>Precio Mensual: </Text>
                        <Text style={styles.text}>$ {price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.title}>Cupos: </Text>
                        <Text style={styles.text}>{quotas}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    rowTitle: {
        flexDirection: 'row',
        backgroundColor: '#626e7e',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        opacity: 0.7,
        alignItems: 'center',
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    x: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 20,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    xText: {
        color: 'white',
        fontSize: 15,
    },
    day: {
        backgroundColor: '#626e7e',
        borderRadius: 8,
    },
    dayText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 6,
        marginVertical: 3,
    }
})


export default ModalView
