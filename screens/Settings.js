import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Footer from '../components/Footer'

export default function Settings() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    </View>
                </View>
                <Footer />
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
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
         padding: 20,
    },
})