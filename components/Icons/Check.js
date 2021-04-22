import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CheckIcon() {
    return (
                <View style={styles.keyicon}>
                    <Ionicons name="checkmark" size={32} color="black" />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        margin:5,
        marginTop: '30%',
        marginBottom: '30%'
    }
})