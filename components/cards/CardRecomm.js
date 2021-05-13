import React from 'react';

import {View,Text,TextInput,StyleSheet} from 'react-native'

import { CheckIcon, WarningIcon } from '../Icons/RecomIcons'


const CardRecomm = ( {icon,site,data} ) => {

    const Card = () => {
        if(data[0] == true)
        {
            return (
                <View style={styles.textBox}>
                    <View style={styles.row}>
                        {icon}
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}> {site}</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            {data[2] == true ? <CheckIcon /> : <WarningIcon />}
                            <Text>Document has a {"`<title>`"} element.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {data[3] == true ? <CheckIcon /> : <WarningIcon />}
                            <Text>Document has a meta description</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {data[4] == true ? <CheckIcon /> : <WarningIcon />}
                            <Text>Document has a valid {"`rel=canonical`"}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {data[1] == true ? <CheckIcon /> : <WarningIcon />}
                            <Text>{"`<html>`"} element has a valid value for its {"`[lang]`"} attribute</Text>
                        </View>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.textBox1}>
                    <View style={styles.row1}>
                        {icon}
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}> {site}</Text>
                    </View>
                    <Text style={{ marginHorizontal: 15, marginVertical: 5 }}>Enter Keywords to page and add Meta Description</Text>
                </View>
            );
        }

    }
    
    console.log("Inside Card",data)

    return (
        <Card />
    );
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 170,
        borderRadius: 15,
        marginBottom: 12,
        paddingHorizontal: 20,
        paddingTop:10,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    textBox1: {
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 15
    }
})

export default CardRecomm;