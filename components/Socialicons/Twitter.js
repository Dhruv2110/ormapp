import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function TwitterIcon() {
    return (
                <View style={styles.keyicon}>
                    <Icon
                        name='twitter'
                        type='font-awesome-5'
                        size={17}
                        color='white' />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        backgroundColor: '#3AA1F2',
        padding: 5,
        borderRadius: 30
    }
})