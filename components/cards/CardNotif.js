import React from 'react';

import {View,Text,TextInput,StyleSheet} from 'react-native'
import NewIcon from '../Icons/New'

const CardNotif = ( {icon,url} ) => {
    return (
        <View style={styles.textBox}>
            {icon}
            <View style={styles.col}>
                <Text style={{ fontWeight: 'bold' }}>{url}</Text>
                <Text>Add your tracked keyword "keyword 1" to your website homepage "Title tag" and "meta description"</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <NewIcon />
                    <Text style={{ fontSize: 12, margin: 7 }}>2 days ago</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: 'white',
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '20%',
        borderRadius: 15,
        marginBottom: 12,
        paddingVertical: 10,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    col: {
        margin: 10
    }
})

export default CardNotif;