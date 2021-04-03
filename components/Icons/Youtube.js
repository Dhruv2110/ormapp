import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function YoutubeIcon() {
    return (
                <View style={styles.keyicon}>
                    <Icon
                        name='youtube'
                        type='font-awesome-5'
                        size={27}
                        color='#E93F33' />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        marginLeft:1
    }
})