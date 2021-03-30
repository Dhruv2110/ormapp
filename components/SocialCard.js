import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'

export default function SocialCard( { icon }) {
    return (
        <View style={styles.textBox}>
            <View style={styles.row}>
                <View style={styles.keyicon}>
                    <Icon
                        name={icon}
                        type='font-awesome-5'
                        size={17}
                        color='white' />
                </View>
                <Text style={{ fontSize: 15 }}> www.{icon}.com/example</Text>
            </View>
            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingLeft: 20
    },
    keyicon: {
        backgroundColor: '#3AA1F2',
        padding: 6,
        borderRadius: 30
    },
    input: {
        margin: 7,
        height: 20,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    }
})