import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, Modal,Pressable} from "react-native";

import Header from '../components/Header'
import Notifications from './Notifications'
import Measure from './Measure'
import Footer from '../components/Footer'

const Keywords = ( {navigation} ) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Header navigate={navigation} />
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
                        <TextInput style={styles.input} placeholder="Keyword 1"></TextInput>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.keyicon}>
                            <FontAwesome5 name="key" size={15} color="white" />
                        </View>
                        <TextInput style={styles.input} placeholder="Keyword 2"></TextInput>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.keyicon}>
                            <FontAwesome5 name="key" size={15} color="white" />
                        </View>
                        <TextInput style={styles.input} placeholder="Keyword 3"></TextInput>
                    </View>
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
        width:'60%'
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        marginTop:20,
        borderWidth:1,
        borderColor:'#4169E1'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        // backgroundColor: "#2196F3",
        backgroundColor: "#FFFFFF",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalHeading: {
        marginBottom:20,
        fontWeight: "bold",
        fontSize:25
    },
    modalContent: {
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
