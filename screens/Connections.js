import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import { FontAwesome5 } from '@expo/vector-icons';
import { Linking } from 'react-native';
export default function App() {
    return (
        <>
        <Header />
        <View style={styles.container}>
                <FontAwesome5 name="headphones-alt" size={75} color="black" />
                    <Text style={{marginLeft:10}}> 
                    <Text style={styles.text}> {`Want more to help with \n ORM? Contact us`}</Text>
                    <Text style={{ color: 'black' ,fontSize:20}}> {`today to\n learn about our ORM and \n Crisis Solutions.`}</Text>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold' }} onpress={() => Linking.openURL('https://www.google.com')} >
                            {`Free\n  Consultation`}
                        </Text>
                    </Text>
                
        </View>
        
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },
    text: {
        marginLeft:10,
        color:"black",
        fontWeight:"bold",
        fontSize:20
    }
});
