import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardMeasure from '../components/cards/CardMeasure'

export default function Measure() {
    return (
        <>
            <Header />
            <ScrollView>
            <View style={styles.container}>
            <View style={{height:20,alignItems: 'center'}}>
                <Text style={{color:'white'}}>Graph</Text>
            </View>
                <View style={styles.card}>
                    <CardMeasure />
                    <CardMeasure />
                    <CardMeasure />
                </View>
            </View>
            <Footer />
            </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#191919',
    },
    card: {
        marginBottom: 10,
        backgroundColor: '#D1D1D1',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20,
    },
    innerCard: {
        backgroundColor:'white',
        width:'95%',
        height: '25%',
        borderRadius:10, 
        marginBottom:15
    },
    tag:{
        backgroundColor:'#00B2FF',
        width:'24%',
        marginTop:10,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
    },
    tagText:{
        fontSize:12,
        color:'white',
        paddingHorizontal:10,
        paddingVertical:7,
        marginLeft:0
    },
    stretch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    }
})
