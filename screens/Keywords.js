import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, Modal,Pressable} from "react-native";
import SnackBar from 'react-native-snackbar-component'
import Header from '../components/Header'
import Notifications from './Notifications'
import Measure from './Measure'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../components/Footer'

import * as Auth from '../api/auth'
import * as Keyword from '../api/keywords'

const Keywords = ( {navigation} ) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [snackbar, setsnackbar] = useState(false)

    const [keyword1, setKeyword1] = useState("")
    const [keyword2, setKeyword2] = useState("")
    const [keyword3, setKeyword3] = useState("")

    const onDismissSnackBar = () => setsnackbar(false);
    // useEffect(async () => {
    //     let user = await Auth.getUser();
    //     setUser(user)
    // }, [])

    async function fetchKeywords() {
        let keywords = await Keyword.getKeywords()
        console.log(keywords)
        setKeyword1(keywords.items[0])
        setKeyword2(keywords.items[1])
        setKeyword3(keywords.items[2])
        // if (keywords.items[0] != "") {await AsyncStorage.setItem('@key1', keywords.items[0])}
        // if (keywords.items[1] != "") {await AsyncStorage.setItem('@key2', keywords.items[1])}
        // if (keywords.items[2] != "") {await AsyncStorage.setItem('@key3', keywords.items[2])}
    }

    useEffect(() => {
        fetchKeywords()
    }, [])

    const saveKeywords = async () => {
        var keywords = [keyword1, keyword2, keyword3]
        console.log(keywords)
        await Keyword.saveKeywords(keywords).then(
            setsnackbar(true)
        );
        fetchKeywords()
    }


    return (
        <>
            <Header navigate={navigation} />
            <SnackBar visible={snackbar}
                bottom={20}
                containerStyle={{ width: '90%', marginHorizontal: 20, borderRadius: 10 }}
                autoHidingTime={0}
                textMessage="Keywords Saved"
                actionHandler={() => onDismissSnackBar()}
                actionText="OK"
                accentColor='#ff9933' />
            <ScrollView style={{ backgroundColor: '#191919' }}>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalHeading}>Example of Keywords:</Text>
                                <View style={styles.modalContent}>
                                    <Text style={{ marginBottom: 10, fontSize: 20 }}>- My Company Name</Text>
                                    <Text style={{ marginBottom: 10, fontSize: 20 }}>- My Brand Name</Text>
                                    <Text style={{ marginBottom: 10, fontSize: 20 }}>- John Smith Tampa FL</Text>
                                </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        source={require('../assets/keyword.png')}
                        style={{ width: 110, height: 70 }}
                    />
                </View>
                <Text style={styles.heading}>Keywords/Searches to improve</Text>
                <Text style={styles.text}>{`Which search engine \nqueries/searches do you want to\n improve?`}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.icon}>
                    <FontAwesome5 name="question-circle" size={20} color="#4169E1" />
                    <Text style={{ color:'#4169E1',fontSize:20}}> Instruction</Text>
                </View>
                </TouchableOpacity>
                
                <View style={styles.card}>
                    <View style={styles.textBox}>
                        <View style={styles.keyicon}>
                        <FontAwesome5 name="key" size={15} color="white" />
                        </View>
                            <TextInput defaultValue={keyword1} style={styles.input} placeholder="Keyword 1" onChangeText={text => setKeyword1(text)}></TextInput>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.keyicon}>
                            <FontAwesome5 name="key" size={15} color="white" />
                        </View>
                            <TextInput defaultValue={keyword2} style={styles.input} placeholder="Keyword 2" onChangeText={text => setKeyword2(text)}></TextInput>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.keyicon}>
                            <FontAwesome5 name="key" size={15} color="white" />
                        </View>
                            <TextInput defaultValue={keyword3} style={styles.input} placeholder="Keyword 3" onChangeText={text => setKeyword3(text)}></TextInput>
                    </View>
                        <TouchableOpacity style={styles.buttonSave} onPress={saveKeywords}>
                            <Text style={{ color: 'white', fontSize: 20 }}>SAVE KEYWORDS</Text>
                        </TouchableOpacity>
                    <Footer/>
                </View>
            </View>
        </ScrollView>
        </>
    );
}


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Keywords">
            <Stack.Screen name="Keywords" component={Keywords} options={{ headerShown: false }} />
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
                }}/>
            <Stack.Screen name="Measure" component={Measure} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    image: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    },
    heading: {
        margin: 10,
        color: 'white',
        fontSize:25,
    },
    text: {
        margin: 10,
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4169E1'
    },
    card: {
        marginTop:10,
        backgroundColor: '#D1D1D1',
        height:'80%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        alignItems: 'center',
        padding:20
    },
    textBox: {
        backgroundColor:'white',
        width:'90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:75,
        borderRadius:15,
        marginBottom:12,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    keyicon: {
        backgroundColor: '#6CC070',
        padding:15,
        borderRadius:30
    },
    input: {
        margin: 15,
        height: 30, 
        width:'65%'
    },
    buttonSave: {
        width: '85%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#4169E1',
        marginVertical: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },



    head: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
