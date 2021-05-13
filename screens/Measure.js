import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, RefreshControl } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { UpIcon, DownIcon, EqualIcon } from '../components/Icons/Change'
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
    const [prePos1, setprePos1] = useState('')
    const [prePos2, setprePos2] = useState('')
    const [prePos3, setprePos3] = useState('')
    const [change1, setchange1] = useState('')
    const [change2, setchange2] = useState('')
    const [change3, setchange3] = useState('')

    async function fetchSerpData() {
        setBestPage1('')
        setBestPage2('')
        setBestPage3('')
        setpos1('')
        setpos2('')
        setpos3('')
        setprePos1('')
        setprePos2('')
        setprePos3('')
        setchange1('')
        setchange2('')
        setchange3('')
        
        //AsyncStorage.clear();
        setLoading(true)
        let keywords = await Keyword.getKeywords()
        console.log("items==",typeof keywords.items[0])
        if ((keywords.items[0] == null || keywords.items[0] == "") && (keywords.items[1] == null || keywords.items[1] == "") && (keywords.items[2] == null || keywords.items[2] == ""))
        {
            setLoading(false)
        }
        // setkeyword1(keywords.items[0])
        // setkeyword2(keywords.items[1])
        // setkeyword3(keywords.items[2])
        else{
            console.log(keyword1, keyword2, keyword3)
            // const keyword = "apple"
            var result1
            var result2
            var result3
            console.log("Key 1", keywords.items[0])
            console.log("Key 2", keywords.items[1])
            console.log("Key 3", keywords.items[2])
            console.log("typeof", typeof keywords.items[1])
            var KeyArr = []
            if (keywords.items[0] != null && keywords.items[0] != "")
            {
                KeyArr.push(keywords.items[0])
            }
            if (keywords.items[1] != null && keywords.items[1] != "")
            {
                KeyArr.push(keywords.items[1])
            }
            if (keywords.items[2] != null && keywords.items[2] != "")
            {
                KeyArr.push(keywords.items[2])
            }
            // var KeyArr = [keywords.items[0], keywords.items[1], keywords.items[2]]

            var result = await Serp.getSerpData({ keyword: KeyArr })
            console.log(result.data.data)
            var arr = result.data.data
            console.log("length", arr.length)
            if (arr.length == 1) {
                result1 = result.data.data[0]
                setBestPage1(result1.url)
                setpos1(result1.currentPosition)
                setprePos1(result1.previousPosition)
                setchange1(result1.previousPosition - result1.currentPosition)
                setkeyword1(result1.keyword)
            }

            if (arr.length == 2) {
                result1 = result.data.data[0]
                setBestPage1(result1.url)
                setpos1(result1.currentPosition)
                setprePos1(result1.previousPosition)
                setchange1(result1.previousPosition - result1.currentPosition)
                setkeyword1(result1.keyword)

                result2 = result.data.data[1]
                setBestPage2(result2.url)
                setpos2(result2.currentPosition)
                setprePos2(result2.previousPosition)
                setchange2(result2.previousPosition - result2.currentPosition)
                setkeyword2(result2.keyword)
            }
            if (arr.length == 3) {
                result1 = result.data.data[0]
                setBestPage1(result1.url)
                setpos1(result1.currentPosition)
                setprePos1(result1.previousPosition)
                setchange1(result1.previousPosition - result1.currentPosition)
                setkeyword1(result1.keyword)

                result2 = result.data.data[1]
                setBestPage2(result2.url)
                setpos2(result2.currentPosition)
                setprePos2(result2.previousPosition)
                setchange2(result2.previousPosition - result2.currentPosition)
                setkeyword2(result2.keyword)

                result3 = result.data.data[2]
                setBestPage3(result3.url)
                setpos3(result3.currentPosition)
                setprePos3(result3.previousPosition)
                setchange3(result3.previousPosition - result3.currentPosition)
                setkeyword3(result3.keyword)
            }
        }
        

        setLoading(false)

    }
    

    useEffect( () => {
        fetchSerpData()
        setLoading(false)
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
                <View style={{padding:5,justifyContent: 'center'}}>
                    <LineChart
                        data={{
                                labels: ["0", keyword1, keyword2, keyword3],
                            datasets: [
                                {
                                    data: [
                                        0,
                                        pos1,
                                        pos2,
                                        pos3
                                    ],
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                                    strokeWidth: 2
                                },
                                {
                                    data: [
                                        0,
                                        prePos1,
                                        prePos2,
                                        prePos3
                                    ],
                                    color: (opacity = 1) => `rgba(107, 132, 216, ${opacity})`, // optional
                                    strokeWidth: 2
                                },
                                {
                                    data: [
                                        0,
                                        Math.abs(change1),
                                        Math.abs(change2),
                                        Math.abs(change3)
                                    ],
                                    color: (opacity = 1) => `rgba(130, 202, 157, ${opacity})`, // optional
                                    strokeWidth: 2
                                }
                            ],
                            legend: ["Current Rank","Previous Rank","Difference"]
                        }}
                        
                        width={ 420 } // from react-native
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
                            marginRight: 60,
                            marginLeft:-5
                        }}
                    />
                </View>
            <View style={{height:20,alignItems: 'center',marginBottom:20}}>
                <Text style={{color:'white',fontSize: 20 }}>ORM Performance</Text>
            </View>
                <View style={styles.card}>
                    <Text style={{fontSize:15,fontStyle:'italic',marginBottom:5,marginTop:-10}}>(Pull to refresh)</Text>
                        <CardMeasure keyword={keyword1} bestPage={bestPage1} pos={pos1} prePos={prePos1} change={change1}/>
                        <CardMeasure keyword={keyword2} bestPage={bestPage2} pos={pos2} prePos={prePos2} change={change2}/>
                        <CardMeasure keyword={keyword3} bestPage={bestPage3} pos={pos3} prePos={prePos3} change={change3} />
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


//     < LineChart
// data = {{
//     labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
//         datasets: [
//             {
//                 data: [
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100
//                 ],
//                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
//                 strokeWidth: 2
//             },
//             {
//                 data: [
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100
//                 ],
//                 color: (opacity = 1) => `rgba(107, 132, 216, ${opacity})`, // optional
//                 strokeWidth: 2
//             },
//             {
//                 data: [
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100
//                 ],
//                 color: (opacity = 1) => `rgba(130, 202, 157, ${opacity})`, // optional
//                 strokeWidth: 2
//             }
//         ]
// }}
// width = { 440 } // from react-native
// height = { 250}
// //yAxisLabel="$"
// //yAxisSuffix="k"
// yAxisInterval = { 1} // optional, defaults to 1
// chartConfig = {{
//     backgroundColor: "#191919",
//         backgroundGradientFrom: "#191919",
//             backgroundGradientTo: "#191919",
//                 decimalPlaces: 0, // optional, defaults to 2dp
//                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                         labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                             style: {
//         borderRadius: 16
//     },
//     propsForDots: {
//         r: "5",
//             strokeWidth: "0",
//                 stroke: "#ffa726"
//     }
// }}
// bezier
// style = {{
//     marginVertical: 8,
//         borderRadius: 16,
//             marginRight: 30,
//                 marginLeft: -15
// }}
// />