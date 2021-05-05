import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, RefreshControl } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardMeasure from '../components/cards/CardMeasure'

import Notifications from './Notifications'

import * as Auth from '../api/auth'
import * as Serp from '../api/serp'
import * as Keyword from '../api/keywords'

const Measure = ({ navigation } ) => {

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false)
    const [data1,setData1] = useState([])
    const [data2,setData2] = useState([])
    const [data3,setData3] = useState([])

    const [bestPage1,setBestPage1] = useState('')
    const [bestPage2,setBestPage2] = useState('')
    const [bestPage3,setBestPage3] = useState('')
    const [keyword1, setkeyword1] = useState('')
    const [keyword2, setkeyword2] = useState('')
    const [keyword3, setkeyword3] = useState('')
    const [pos1, setpos1] = useState('')
    const [pos2, setpos2] = useState('')
    const [pos3, setpos3] = useState('')

    // useEffect(
    //     () =>
    //         navigation.addListener('beforeRemove', (e) => {

    //             // Prevent default behavior of leaving the screen
    //             e.preventDefault();

    //         }),
    //     [navigation]
    // );

    async function fetchSerpData() {
        setBestPage1('')
        setBestPage2('')
        setBestPage3('')
        setpos1('')
        setpos2('')
        setpos3('')
        //AsyncStorage.clear();
        setLoading(true)
        let keywords = await Keyword.getKeywords()
        console.log(keywords)
        // console.log(await AsyncStorage.getItem('@key1'))
        // await AsyncStorage.getItem('@key2')
        // await AsyncStorage.getItem('@key3')
        // setkeyword1(await AsyncStorage.getItem('@key1'))
        // setkeyword2(await AsyncStorage.getItem('@key2'))
        // setkeyword3(await AsyncStorage.getItem('@key3'))
        setkeyword1(keywords.items[0])
        setkeyword2(keywords.items[1])
        setkeyword3(keywords.items[2])
        console.log(keyword1, keyword2, keyword3)
        // const keyword = "apple"
        var result1
        var result2
        var result3
        console.log("Key 1", keywords.items[0])
        console.log("Key 2", keywords.items[1])
        console.log("Key 3", keywords.items[2])
        if (keywords.items[0] != '') {
            result1 = await Serp.getSerpData({ keyword: keywords.items[0]})
            setBestPage1(result1.data.data.output[0][1])
            setpos1(1)
        }

        if (keywords.items[1] != '') {
            result2 = await Serp.getSerpData({ keyword: keywords.items[1]})
            setBestPage2(result2.data.data.output[0][1])
            setpos2(1)
        }

        if (keywords.items[2] != '') {

            result3 = await Serp.getSerpData({ keyword: keywords.items[2]})
            setBestPage3(result3.data.data.output[0][1])
            setpos3(1)
        }


        // console.log("key 1 res:",result1.data.data.output[0][1])
        // console.log("key 2 res:", result2.data.data.output[0][1])
        // console.log("key 3 res:", result3.data.data.output[0][1])

        // setBestPage1(result1.data.data.output[0][1])
        // setBestPage2(result2.data.data.output[0][1])
        // setBestPage3(result3.data.data.output[0][1])
        setLoading(false)
        // console.log("Key1 Res",result1)
        // console.log("Key2 Res",result2)
        // console.log("Key3 Res",result3)

        // result1.data.json.data.splice(7)
        // result2.data.json.data.splice(7)
        // result3.data.json.data.splice(7)
        // var arr1 = result1.data.json.data
        // var arr2 = result2.data.json.data
        // var arr3 = result3.data.json.data
        // console.log(result1.data.json.data)
        // console.log(result2.data.json.data)
        // console.log(result3.data.json.data)

        // var ArrData1 = []
        // var ArrData2 = []
        // var ArrData3 = []
        // arr1.forEach((el) => {
        //     ArrData1.push(el[0])
        // })
        // arr2.forEach((el) => {
        //     ArrData2.push(el[0])
        // })
        // arr3.forEach((el) => {
        //     ArrData3.push(el[0])
        // })
        // console.log(ArrData1, ArrData2, ArrData3)
        // setData1(ArrData1)
        // setData2(ArrData2)
        // setData3(ArrData3)
        // console.log(data2)
    }
    

    useEffect( () => {
        fetchSerpData()
    },[]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchSerpData();
        setRefreshing(false);
    };

    const screenWidth = Dimensions.get("window").width;
    return (
        <>
            <Header navigate={navigation} />
            <Spinner
                visible={loading}
                textContent={'Please Wait...'}
                textStyle={{ color: '#FFF' }}
            />
            <ScrollView style={{ backgroundColor: '#191919' }} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>

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
                    <Text style={{fontSize:15,fontStyle:'italic',marginBottom:5,marginTop:-10}}>(Pull to refresh)</Text>
                        <CardMeasure keyword={keyword1} bestPage={bestPage1} pos={pos1} />
                        <CardMeasure keyword={keyword2} bestPage={bestPage2} pos={pos2}  />
                        <CardMeasure keyword={keyword3} bestPage={bestPage3} pos={pos3}  />
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
