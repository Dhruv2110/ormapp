import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';

const LockIcon = () => {
    return (
        <View style={styles.icon}>
            <Icon
                name='lock'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );
}

const MailIcon = () => {
    return (
        <View style={styles.icon}>
            <Entypo name="mail" size={24} color="#CCCCFF" />
        </View>
    );
}

const EyeOpen = () => {
    return (
        <View style={styles.icon}>
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
        <View style={styles.icon}>
            <Icon
                name='eye-slash'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );
}

const UserIcon = () => {
    return (
        <View style={styles.icon}>
            <Icon
                name='user-alt'
                type='font-awesome-5'
                size={24}
                color='#CCCCFF' />
        </View>
    );
}

const UsersIcon = () => {
    return (
        <View style={styles.icon}>
            <Icon
                name='users'
                type='font-awesome-5'
                size={22}
                color='#CCCCFF' />
        </View>
    );
}


const styles = StyleSheet.create({

})


export {
    LockIcon, MailIcon, EyeOpen, EyeSlash, UserIcon, UsersIcon
}