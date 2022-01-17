import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { JitsiMeetExtended, JitsiMeetView } from 'react-native-jitsi-meet-extended';

const JitsiMeet = () => {

    const [showMeet, setShowMeet] = React.useState(false);

    return (
        <View style={styles.container}>
            {showMeet ?
                <JitsiMeetView
                    style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                    }}
                    options={{
                        roomId: "radikal-gym",
                        inviteEnabled: false,
                        recordingEnabled: false,
                        liveStreamEnabled: false,
                        pipModeEnabled: true,
                        userInfo: {
                            displayName: "Mauro Vega"
                        }
                    }}
                    onConferenceTerminated={() => setShowMeet(false)}
                />
                :
                <>
                    <TouchableOpacity onPress={() => setShowMeet(true)} style={styles.button}>
                        <Text style={styles.buttonText}>Unirse a Clase en Vivo</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        No cambies de Tab mientras estás en la clase en vivo.
                    </Text>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        width: 250,
        height: 50,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        width: 230,
        textAlign: "justify",
        color: "gray",
    },
    buttonText: {
        color: "black",
        fontSize: 20,
    }
})


export default JitsiMeet
