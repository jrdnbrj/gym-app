import React, { useEffect, useState } from 'react';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const StepCounter = () => {
    const [steps, setSteps] = useState(0);

    useEffect(() => {
        const config = {
            default_threshold: 1.0,
            default_delay: 1,
            cheatInterval: 3000,
            onStepCountChange: (stepCount) => { setSteps(stepCount) },
            onCheat: () => { console.log("User is Cheating") }
        }
        startCounter(config);
        return () => { stopCounter() }
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Text>Contador de Pasos</Text>
                <Text style={styles.step}>{steps}</Text>
                <Text>Pasos alcanzados hoy: 21</Text>
                <Text>Pasos alcanzados esta semana: 49</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center'
        marginTop: 50
        
    },
    step: {
        fontSize: 36,
        marginBottom: 30
    }
});

export default StepCounter;