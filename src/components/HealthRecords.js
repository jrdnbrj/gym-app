import React, { useState } from 'react'
import { 
    StyleSheet, View, Text, ScrollView, 
    TouchableOpacity, Picker, TextInput 
} from 'react-native'

import userAll from '../graphql/query/userAll'
import healthRecordCreate from '../graphql/mutation/healthRecordCreate'

import { useQuery, useMutation } from "@apollo/client";


const HealthRecords = ({ user }) => {
    console.log("HealthRecords:", user)

    const { data } = useQuery(userAll);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [formData, setFormData] = useState({
        clientID: data?.userAll[0].id, weight: "", height: "", 
        pulse: "", bloodPressure: "" 
    })

    const [createHealthRecord, { loading }] = useMutation(healthRecordCreate, {
        onCompleted: data => {
            console.log("Health Record Create Data:", data)
            setSuccessMsg("Registro de Salud Creado.")
            setFormData({
                clientID: "", weight: "", height: "",
                pulse: "", bloodPressure: ""
            })
            setErrorMsg("")
        },
        onError: error => {
            console.log("Health Record Create Error:", error.message)
            setErrorMsg(error.message)
            setSuccessMsg("")
        }
    })

    const onChangeClientID = (value) => {
        setFormData({ ...formData, clientID: value })
    }

    const onChangeWeight = (value) => {
        setFormData({ ...formData, weight: value })
    }

    const onChangeHeight = (value) => {
        setFormData({ ...formData, height: value })
    }

    const onChangePulse = (value) => {
        setFormData({ ...formData, pulse: value })
    }

    const onChangeBloodPressure = (value) => {
        if (!validateBloodPressure(value)) {
            setErrorMsg("La presión arterial debe tener el formato: 120/80.")
        } else
            setErrorMsg("")
        setFormData({ ...formData, bloodPressure: value })
    }

    const validateBloodPressure = bloodPressure => {
        const regex = /^\d{1,3}\/\d{1,3}$/;
        return regex.test(bloodPressure);
    }

    const handleSubmit = e => {
        console.log("formData:", formData)
        if (!formData.clientID) {
            setErrorMsg("Selecciona un deportista.");
            return;
        }
        if (!formData.weight) {
            setErrorMsg("Ingresa el peso.");
            return;
        }
        if (!formData.height) {
            setErrorMsg("Ingresa la altura.");
            return;
        }
        if (!formData.pulse) {
            setErrorMsg("Ingresa el pulso.");
            return;
        }
        if (!formData.bloodPressure) {
            setErrorMsg("Ingresa la presión arterial.");
            return;
        }
        if (!validateBloodPressure(formData.bloodPressure)) {
            setErrorMsg("La presión arterial debe tener el formato: 120/80.");
            return;
        }

        const variables = {
            clientID: formData.clientID,
            weight: parseFloat(formData.weight),
            height: parseFloat(formData.height),
            pulse: parseInt(formData.pulse),
            systolicPressure: parseInt(formData.bloodPressure.split("/")[0]),
            diastolicPressure: parseInt(formData.bloodPressure.split("/")[1])
        };

        createHealthRecord({ variables });
    }

    return (
        <View>
            <Text style={styles.title}>Registros de Salud</Text>
            <Text style={styles.info}>Escoge un deportista.</Text>
            <Picker
                selectedValue={formData.clientID}
                style={styles.picker}
                onValueChange={onChangeClientID}
            >
                {data?.userAll.map(user => (
                    <Picker.Item key={user.id} label={user.firstName + " " + user.lastName} value={user.id} />
                ))}
            </Picker>
            <Text style={styles.info}>Ingresa el peso en Kg.</Text>
            <TextInput style={styles.input} onChangeText={onChangeWeight} value={formData.weight} />
            <Text style={styles.info}>Ingresa la altura en m.</Text>
            <TextInput style={styles.input} onChangeText={onChangeHeight} value={formData.height} />
            <Text style={styles.info}>Ingresa el pulso en bpm.</Text>
            <TextInput style={styles.input} onChangeText={onChangePulse} value={formData.pulse} />
            <Text style={styles.info}>Ingresa la presión arterial en mmHg.</Text>
            <TextInput style={styles.input} onChangeText={onChangeBloodPressure} value={formData.bloodPressure} />
            {errorMsg !== '' && <Text style={styles.errorMsg}>{errorMsg}</Text>}
            {successMsg !== '' && <Text style={styles.successMsg}>{successMsg}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{loading ? 'Registrando' : 'Registrar'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HealthRecords

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fb5b5a",
        alignSelf: "center",
        marginTop: 20
    },
    info: {
        fontSize: 16,
        marginBottom: 10
    },
    picker: {
        height: 50,
        width: 250,
        marginBottom: 10,
        backgroundColor: "gray",
    },
    input: {
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
    errorMsg: {
        color: "red",
        fontSize: 16,
        marginBottom: 10,
        alignSelf: "center",
    },
    successMsg: {
        color: "green",
        fontSize: 16,
        marginBottom: 10,
        alignSelf: "center",
    },
    button: {
        width: 250,
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginBottom: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})
