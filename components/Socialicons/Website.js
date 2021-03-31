import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function TwitterIcon() {
    return (
                <View style={styles.keyicon}>
                    <Icon
                        name='globe-americas'
                        type='font-awesome-5'
                        size={27}
                        color='#2B76A8' />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        marginLeft:2
    }
})