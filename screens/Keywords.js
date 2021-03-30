import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header'

import Footer from '../components/Footer'

export default function App() {
    return (
        <>
            <Header />
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        source={require('../assets/keyword.png')}
                        style={{ width: 110, height: 70 }}
                    />
                </View>
                <Text style={styles.heading}>Keywords/Searches to improve</Text>
                <Text style={styles.text}>{`Which search engine \nqueries/searches do you want to\n improve?`}</Text>
                <TouchableOpacity>
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
    }
});
