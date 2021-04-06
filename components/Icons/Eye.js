import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'


const EyeOpen = () => {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='eye'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );

}

const EyeSlash = () => {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='eye-slash'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );

}

const styles = StyleSheet.create({

})

export {
    EyeOpen, EyeSlash
}