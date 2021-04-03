import React from 'react';

import {View,Text,TextInput,StyleSheet} from 'react-native'

import EditIcon from '../Icons/Edit'

const CardConn = ( {siteIcon,site,checkIcon} ) => {
    return (
        <View style={styles.textBox}>
            <View style={styles.col1}>
                <View style={styles.row}>
                    {siteIcon}
                    <Text style={{ fontSize: 15 }}> {site}</Text>
                </View>
                <TextInput style={styles.input} placeholder="www.demosite.url.com"></TextInput>
            </View>
            <View style={styles.col2}>
                <EditIcon />
                {checkIcon}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingTop: 5
    },
    input: {
        margin: 7,
        height: 25,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 10
    },
    col1: {
        alignItems: 'flex-start',
        width: '70%',
        marginLeft: 5
    },
    col2: {
        flexDirection: 'row',
    }
})

export default CardConn;