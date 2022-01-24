// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import SamsungHealth from 'react-native-samsung-health'


// const SamsungHealth = () => {
    
//     useEffect(() => {
//         // getWeightSamples(options, callback)
//         // buildDailySteps(data)
//         SamsungHealth.authorize([ SamsungHealth.STEP_COUNT ], (err, res) => {
//             if (res) {
//                 let opt = {};
//                 SamsungHealth.getDailyStepCountSamples(opt, (err, res) => {
//                     if (err) console.log("SAMSUNG ERRORR:", err);
//                     if (res) console.log("SAMUNG RES:", res);
//                 });
//             } else console.log(err);
//         });

//         SamsungHealth.authorize([ SamsungHealth.WEIGHT ], (err, res) => {
//             if (res) {
//                 let opt = {};
//                 SamsungHealth.getWeightSamples(opt, (err, res) => {
//                     if (err) console.log("SAMSUNG2 ERRORR:", err);
//                     if (res) console.log("SAMUNG2 RES:", res);
//                 });
//             } else console.log(err);
//         }
//     },[])

//     return (
//         <View>
//             <Text>Samsung Health</Text>
//         </View>
//     )
// }


// export default SamsungHealth;