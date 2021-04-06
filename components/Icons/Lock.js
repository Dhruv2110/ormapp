import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function LockIcon() {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='lock'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );
}

const styles = StyleSheet.create({

})