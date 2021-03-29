import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Entypo } from '@expo/vector-icons';


export default function App() {
    return (
        <View style={styles.head}>
            <View style={{ width: 30, height: 40 }}></View>
            <Image
                source={require('../assets/logo_only.png')}
                style={{ width: 40, height: 40 }}
            />
            <View style={styles.dots}>
                <Entypo
                    name="dots-three-vertical"
                    size={24} color="white"
                    onClick={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#191919',
    // },
    head: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});