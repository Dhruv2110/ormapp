import React from 'react';

import { View, Text, StyleSheet } from 'react-native'

export default function NewIcon() {
    return (
        <View style={styles.icon}>
            <Text style={styles.text}>NEW</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor:'green',
        padding:7,
        borderRadius:60,
    },
    text: {
        color:'white',
        fontSize:12
    }
})