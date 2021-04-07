import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { LineChart } from "react-native-chart-kit";

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardMeasure from '../components/cards/CardMeasure'

import Notifications from './Notifications'

const Measure = ({ navigation } ) => {
    const screenWidth = Dimensions.get("window").width;
    return (
        <>
            <Header navigate={navigation} />
            <ScrollView style={{ backgroundColor:'#191919'}}>

            <View style={styles.container}>
                <View style={{padding:5,alignItems: 'center',justifyContent: 'center'}}>
                    <LineChart
                        data={{
                                labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ],
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                                    strokeWidth: 2
                                },
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ],
                                    color: (opacity = 1) => `rgba(107, 132, 216, ${opacity})`, // optional
                                    strokeWidth: 2
                                },
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ],
                                    color: (opacity = 1) => `rgba(130, 202, 157, ${opacity})`, // optional
                                    strokeWidth: 2
                                }
                            ]
                        }}
                        width={ 440 } // from react-native
                        height={250}
                        //yAxisLabel="$"
                        //yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#191919",
                            backgroundGradientFrom: "#191919",
                            backgroundGradientTo: "#191919",
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "5",
                                strokeWidth: "0",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginRight: 30,
                            marginLeft:-15
                        }}
                    />
                </View>
            <View style={{height:20,alignItems: 'center',marginBottom:20}}>
                <Text style={{color:'white',fontSize: 20 }}>ORM Performance</Text>
            </View>
                <View style={styles.card}>
                    <CardMeasure />
                    <CardMeasure />
                    <CardMeasure />
                    <Footer />
                </View>
            </View>
            </ScrollView>
        </>
    );

}


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Measure">
            <Stack.Screen name="Measure" component={Measure} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications}
                options={{
                    title: 'Notifications',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#191919',

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    }
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    card: {
        marginBottom: 10,
        backgroundColor: '#D1D1D1',
        height: '90%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20,
    },
    innerCard: {
        backgroundColor:'white',
        width:'95%',
        height: '25%',
        borderRadius:10, 
        marginBottom:15
    },
    tag:{
        backgroundColor:'#00B2FF',
        width:'24%',
        marginTop:10,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
    },
    tagText:{
        fontSize:12,
        color:'white',
        paddingHorizontal:10,
        paddingVertical:7,
        marginLeft:0
    },
    stretch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    }
})
