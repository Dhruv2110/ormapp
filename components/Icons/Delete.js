import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DeleteIcon() {
    return (
                <View style={styles.keyicon}>
                    <MaterialIcons name="delete" size={24} color="black" />
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