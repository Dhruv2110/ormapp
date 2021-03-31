import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';

export default function CrossIcon() {
    return (
                <View style={styles.keyicon}>
            <MaterialIcons name="cancel" size={32} color="red" />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        margin: 5,
        marginTop: '30%',
        marginBottom: '30%'
    }
})