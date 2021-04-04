import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { SimpleLineIcons } from '@expo/vector-icons';

export default function EditIcon() {
    return (
                <View style={styles.keyicon}>
                    <SimpleLineIcons name="pencil" size={28} color="black" />
            {/* <Icon
                name='globe-americas'
                type='font-awesome-5'
                size={27}
                color='#2B76A8' /> */}
                </View>
    );
}

const styles = StyleSheet.create({
    keyicon: {
        margin:5,
        marginTop:'30%',
        marginBottom:'30%'
    }
})