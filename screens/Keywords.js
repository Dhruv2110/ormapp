import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from '../components/Header'


export default function App() {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        source={require('../assets/keyword.png')}
                        style={{ width: 100, height: 70 }}
                    />
                </View>
            </View>
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
        alignItems: 'center',
    }
});
