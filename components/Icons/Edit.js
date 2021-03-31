import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { SimpleLineIcons } from '@expo/vector-icons';

export default function EditIcon() {
    return (
                <View style={styles.keyicon}>
                    <SimpleLineIcons name="pencil" size={28} color="black" />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        margin:5,
        marginTop:'30%',
        marginBottom:'30%'
    }
})