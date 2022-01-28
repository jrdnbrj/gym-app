import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, View, Text, ScrollView, 
    TouchableOpacity, ActivityIndicator 
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { useQuery, useMutation } from '@apollo/client'

import weekScheduleAll from '../graphql/query/weekScheduleAll'
import weekScheduleAddStudent from '../graphql/mutation/weekScheduleAddStudent'
import clientRemoveReservation from '../graphql/mutation/clientRemoveReservation'

import Modal from '../components/Modal'


const hours = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
]

const days = [
    ['LUNES', 'Monday'], ['MARTES', 'Tuesday'], ['MIÉRCOLES', 'Wednesday'],
    ['JUEVES', 'Thursday'], ['VIERNES', 'Friday'], ['SÁBADO', 'Saturday'],
    ['DOMINGO', 'Sunday']
]

const Calendar = ({ user }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [modalData, setModalData] = useState({
        name: '', emoji: '', instructor: '', startDate: '',
        dayss: [], price: '', quotas: '',       
    })

    const { loading, error, data, refetch } = useQuery(weekScheduleAll, {
        fetchPolicy: 'no-cache',
    })
    const [addStudent, { loading: addingStudent }] = useMutation(
        weekScheduleAddStudent, {
            onCompleted: () => {
                refetch();
                setModalVisible(false);
            },
            onError: (error) => {
                console.log(JSON.stringify(error));
                setErrorMsg("Error al registrarse en la clase. Inténtalo de nuevo.");
            }
        } 
    );
    const [removeReservation, { loading: removingStudent }] = useMutation(
        clientRemoveReservation, {
            onCompleted: () => {
                refetch();
                setModalVisible(false);
            },
            onError: (error) => {
                console.log(error);
                setErrorMsg("Error eliminando la reserva. Inténtalo de nuevo.");
            }
        }
    );

    const date = new Date()
    const day = date.getDate()
    const dayOfWeek = date.getDay()

    const getHour = hour => {
        return hour < 10 ? `0${hour}:00` : `${hour}:00`
    }

    const bookClass = (clientID, weekScheduleID) => {
        console.log(clientID, weekScheduleID)
        addStudent({ variables: { clientID, weekScheduleID }})
    }

    const remove = weekScheduleID =>
        removeReservation({ variables: { weekScheduleID }})

    const Class = ({ hour }) => {
        let busy = false
        let available = false
        let unavailable = false

        let id = ''
        let name = ''
        let emoji = ''
        let instructor = ''
        let startDate = ''
        let dayss = ''
        let price = ''
        let quotas

        data?.weekScheduleAll.forEach(schedule => {
            const fecha = new Date(schedule.startDate)

            if (getHour(fecha.getHours()) === hour) {
                if (schedule.days.includes(days[dayOfWeek - 1][1])) {
                    id = schedule.id
                    emoji = schedule.workoutType.emoji

                    name = schedule.workoutType.name
                    emoji = schedule.workoutType.emoji
                    instructor = schedule.instructor.firstName + ' ' 
                        + schedule.instructor.lastName
                    startDate = schedule.startDate
                    dayss = schedule.days
                    price = schedule.price
                    quotas = schedule.quotas

                    const students = Array.from(schedule.students, student => student.id);

                    if (students.includes(user.id)) {
                        busy = true
                    } else {
                        if (quotas === 0) unavailable = true
                        else available = true
                    }
                }
            }
        })

        const openModal = () => {
            setModalData({ 
                id, name, emoji, instructor, startDate, 
                dayss, price, quotas, busy, unavailable })
            setModalVisible(true)
        }

        if (busy)
            return (
                <TouchableOpacity style={styles.classBox} onPress={openModal}>
                    <View style={styles.busy}>
                        <Text style={styles.emoji}>{emoji}</Text>
                    </View>
                </TouchableOpacity>
            )
        
        if (available)
            return (
                <TouchableOpacity style={styles.classBox} onPress={openModal}>
                    <View style={styles.available}>
                        <Text style={styles.emoji}>{emoji}</Text>
                    </View>
                </TouchableOpacity>
            )

        if (unavailable)
            return (
                <TouchableOpacity style={styles.classBox} onPress={openModal}>
                    <View style={styles.unavailable}>
                        <Text style={styles.emoji}>{emoji}</Text>
                    </View>
                </TouchableOpacity>
            )

        return (
            <View style={styles.classBox}>
                <View style={styles.empty} />
            </View>
        )
    }

    return <ScrollView>
        <View style={styles.container}>
            {errorMsg !== '' && <Text style={styles.error}>{errorMsg}</Text>}
            <View style={styles.day}>
                <View style={styles.colTime}>
                    {loading ?
                        <ActivityIndicator color="white" size="large" style={styles.spinner} /> :
                        <TouchableOpacity onPress={() => refetch()}>
                            <Icon name='repeat' size={35} color='white' style={styles.spinner} />
                        </TouchableOpacity>}
                </View>
                <View style={styles.colClass}>
                    <View style={styles.dayBox}>
                        <Text style={styles.dayText}>{day}</Text>
                        <Text style={styles.dayText}>{days[dayOfWeek - 1][0]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.colTime}>
                    {hours.map(hour => 
                        <View key={hour} style={styles.timeBox}>
                            <Text style={styles.time}>{hour}</Text>
                        </View>
                    )}
                </View>
                <View style={styles.colClass}>
                    {hours.map(hour => <Class key={hour} hour={hour} /> )}
                </View>
            </View>
        </View>
        <Modal 
            visible={modalVisible}
            closeModal={() => setModalVisible(false)}
            {...modalData}
            bookClass={() => bookClass(user.id, modalData.id)}
            remove={() => remove(modalData.id)}
            loading={{ addingStudent, removingStudent }}
        />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    day: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#626e7e',
        padding: 10,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
    },
    dayText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    colTime: {
        flex: 1,
    },
    timeBox: {
        alignItems: 'center',
        backgroundColor: '#626e7e',
        paddingVertical: 22,
        margin: 0,
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    time: {
        color: 'white',
        fontSize: 20,
    },
    colClass: {
        flex: 3,
    },
    classBox: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#626e7e',
        borderRightWidth: 1,
    },
    dayBox: {
        alignItems: 'center',
    },
    empty: {
        marginVertical: 35.3,
    },
    busy: {
        alignItems: 'center',
        backgroundColor: '#0d60ccab',
        width: "80%",
        paddingVertical: 5.7,
        marginVertical: 10,
        borderRadius: 15,
    },
    available: {
        alignItems: 'center',
        backgroundColor: '#09b4127e',
        width: "80%",
        paddingVertical: 5.7,
        marginVertical: 10,
        borderRadius: 15,
    },
    unavailable: {
        alignItems: 'center',
        backgroundColor: '#ff04197e',
        width: "80%",
        paddingVertical: 5.7,
        marginVertical: 10,
        borderRadius: 15,
    },
    emoji: {
        fontSize: 29.3,
        color: 'white',
    },
    error: {
        color: 'red',
        fontSize: 20,
        marginBottom: 15,
    },
    spinner: {
        marginLeft: 20,
        alignSelf: 'flex-start',
    }
});

export default Calendar
