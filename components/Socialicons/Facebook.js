import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function FacebookIcon() {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='facebook'
                type='font-awesome-5'
                size={28}
                color='#4267B2' />
        </View>
    );
}

const styles = StyleSheet.create({

})