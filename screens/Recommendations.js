import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialCard from '../components/SocialCard'

export default function App() {
    return (
        <>
        <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Our Recommendations</Text>
                    <Text style={styles.text}>{`Last Updated: Jan 5, 2021`}</Text>
                    <View style={styles.card}>
                        <SocialCard icon='twitter'/>
                        <SocialCard icon='facebook'/>
                        <SocialCard icon='linkedin'/>
                        <Footer />
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
        fontSize: 25,
        textAlign: 'center'
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
    },
    card: {
        marginTop: 10,
        backgroundColor: '#D1D1D1',
        height: '80%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20
    }
});

