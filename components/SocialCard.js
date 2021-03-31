import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import TwitterIcon from './Socialicons/Twitter'

export default function SocialCard( { icon } ) {
    return (
        <View style={styles.textBox}>
            <View style={styles.row}>
                <TwitterIcon/>
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