import React from 'react';

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

import EditIcon from '../Icons/Edit'

const CardConn = ({ siteIcon, site, checkIcon,URL, onCheck, children} ) => {
    return (
        <View style={styles.textBox}>
            <View style={styles.col1}>
                <View style={styles.row}>
                    {siteIcon}
                    <Text style={{ fontSize: 15}}> {site}</Text>
                </View>
                {children}
            </View>
            <View style={styles.col2}>
                <TouchableOpacity onPress={()=>onCheck(URL)}>
                    <EditIcon />
                </TouchableOpacity>
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
        paddingTop: 5,
        elevation: 5,
        shadowColor: 'rgba(0,0,0, .8)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
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
        justifyContent: 'center',
        alignItems: 'baseline',
    }
})

export default CardConn;