import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function MailIcon() {
    return (
        <View style={styles.keyicon}>
            <Entypo name="mail" size={24} color="#CCCCFF" />
        </View>
    );
}

const styles = StyleSheet.create({

})