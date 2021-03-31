import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, Modal,Pressable} from "react-native";

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Header />
            <ScrollView>
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
                            <Text style={styles.modalText}>Hello World!</Text>
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
        marginBottom:12
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
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
