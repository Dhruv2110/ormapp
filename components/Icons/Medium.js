import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function MediumIcon() {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='medium'
                type='font-awesome-5'
                size={27}
                color='black' />
        </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        marginLeft: 2
    }
})