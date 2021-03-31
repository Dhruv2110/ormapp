import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App() {
    return (
        <>
        <Header />
        <View style={styles.container}>
            <TouchableOpacity>
            <Text style={styles.text } >
                    {`Notifications                          `}
            </Text>
                </TouchableOpacity>
                <TouchableOpacity>
            <Text style={styles.text}>
                    {`Settings                                  `}
            </Text>
            </TouchableOpacity>
        </View>
         <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        height: '65%',
        alignItems: 'flex-start',
    },
    text: {
        color:'white',
        fontSize: 27,
        marginLeft:25,
        marginTop:'10%',
        lineHeight:70,
        borderBottomWidth:2,
        borderBottomColor: 'white'
    }
});
