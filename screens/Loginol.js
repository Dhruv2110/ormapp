import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// import { Dimensions ,View,Text,TextInput,StyleSheet,Image,ScrollView} from 'react-native'

import MailIcon from '../components/Icons/Email'
import LockIcon from '../components/Icons/Lock'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Login() {

    return (
        <>
            {/* <ScrollView style={{ backgroundColor: '#191919' }}> */}
                <View style={styles.container}>
                    <View style={styles.head}>
                        <View style={{ alignItems: 'center', marginVertical: 40 }}>
                        <Image
                            source={require('../assets/logo_only.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ color: '#54585A', fontSize: 20 }}>ORM Optimizer</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headText}>Welcome,</Text>
                        <Text style={styles.headText}>Login Now.</Text>
                    </View>
                </View>

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
                        <View style={styles.textBox}>
                            <View style={styles.keyicon}>
                                <FontAwesome5 name="key" size={15} color="white" />
                            </View>
                            <TextInput style={styles.input} placeholder="Keyword 3"></TextInput>
                        </View>
                    </View>
                </View>
            {/* </ScrollView> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    card: {
        marginTop: 10,
        backgroundColor: '#D1D1D1',
        height: 500,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20
    },
    textBox: {
        backgroundColor: 'white',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        borderRadius: 15,
        marginBottom: 12,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 0, width: 0 }, // IOS
        shadowOpacity: 2, // IOS
        shadowRadius: 1, //IOS
    },
    input: {
        margin: 15,
        height: 30,
        width: '60%'
    },
    head: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headText: {
        color: 'white',
        fontSize: 30,
    },

    
});