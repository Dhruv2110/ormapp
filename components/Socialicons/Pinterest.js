import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function PinterestIcon() {
    return (
                <View style={styles.keyicon}>
                    <Icon
                        name='pinterest'
                        type='font-awesome-5'
                        size={27}
                        color='#C8352C' />
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        marginLeft:2
    }
})