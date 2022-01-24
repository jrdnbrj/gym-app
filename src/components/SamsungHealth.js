// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { RNSamsungHealth } from 'rn-samsung-health';


// const SamsungHealth = () => {
    
//     useEffect(()=>{
//         health();
//     },[])

//     const health = async() => {
//         try{
//             const auth = await RNSamsungHealth.authorize();
//             let startDate = new Date().setDate(new Date().getDate()-30); // 30 days back date
//             let endDate = new Date().getTime(); //today's date
//             let opt = {startDate, endDate};

//             const steps = await RNSamsungHealth.getDailyStepCount(opt);
//             const height = await RNSamsungHealth.getHeight();
//             const weight = await RNSamsungHealth.getWeight();
//             const sleep = await RNSamsungHealth.getSleep(opt);
//             const cholesterol = await RNSamsungHealth.getCholesterol(opt);
//             const bloodPressure = await RNSamsungHealth.getBloodPressure(opt);
//             const bodyTemprature = await RNSamsungHealth.getBodyTemprature(opt);
//             console.log("Steps:", steps);
//             console.log("Height:", height);
//             console.log("Weight:", weight);
//             console.log("Sleep:", sleep);
//             console.log("Cholesterol:", cholesterol);
//             console.log("Blood Pressure:", bloodPressure);
//             console.log("Body Temprature:", bodyTemprature);
//         }catch(error){
//             console.log("error ", error)
//         }
//     }
//     return (
//         <View>
//             <Text>Samsung Health</Text>
//         </View>
//     )
// }


// export default SamsungHealth;