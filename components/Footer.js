import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WebsiteIcon() {
    return (
        <View style={styles.bottom}>
            <FontAwesome5 name="headphones-alt" size={70} color="black" />
            <Text style={{ marginLeft: 7 }}>
                <Text style={styles.text2}> {`Want more to help with \n ORM? Contact us`}</Text>
                <Text style={{ color: 'black', fontSize: 20 }}> {`today to\n learn about our ORM and \n Crisis Solutions.\n`}</Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://tuckerhall.com/contact-us/")}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold' }} >
                     <Text>  </Text>{`Free Consultation`}
                </Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
        bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding:10,
        backgroundColor: '#D1D1D1',
        margin:7,
        borderRadius:20,
        elevation:10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
        text2: {
        marginLeft: 10,
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    }
})