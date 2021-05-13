import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function WarningIcon() {
    return (
                <View style={styles.keyicon}>
            <Ionicons name="warning" size={24} color="orange" />     
                </View>
    );
}

function CheckIcon() {
    return (
                <View style={styles.keyicon}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {

    }
})

export { WarningIcon, CheckIcon }