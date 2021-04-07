import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

const FacebookIcon = () => {
    return (
        <View style={styles.keyicon}>
            <Icon
                name='facebook'
                type='font-awesome-5'
                size={28}
                color='#1B77EB' />
        </View>
    );
}

const LinkedInIcon = () => {
    return (
        <View style={{ marginLeft: 2}}>
            <Icon
                name='linkedin'
                type='font-awesome-5'
                size={27}
                color='#0071BB' />
        </View>
    );
}

const MediumIcon = () => {
    return (
        <View style={{ marginHorizontal: 2}}>
            <Icon
                name='medium'
                type='font-awesome-5'
                size={27}
                color='black' />
        </View>
    );
}

const PinterestIcon = () => {
    return (
        <View style={{ marginLeft: 2}}>
            <Icon
                name='pinterest'
                type='font-awesome-5'
                size={27}
                color='#C8352C' />
        </View>
    );
}

const TwitterIcon = () => {
    return (
        <View style={{
            backgroundColor: '#3AA1F2',
            padding: 5,
            borderRadius: 30
        }}>
            <Icon
                name='twitter'
                type='font-awesome-5'
                size={17}
                color='white' />
        </View>
    );
}

const WebsiteIcon = () => {
    return (
        <View style={{ marginLeft: 2 }}>
            <Icon
                name='globe-americas'
                type='font-awesome-5'
                size={27}
                color='#0266FA' />
        </View>
    );
}

const YoutubeIcon = () => {
    return (
        <View style={{
            marginLeft: 1
        }}>
            <Icon
                name='youtube'
                type='font-awesome-5'
                size={27}
                color='#E93F33' />
        </View>
    );
}

const CrunchBaseIcon = () => {
    return (
        <View style={styles.crunchBase}>
            <Text style={{color: 'white',fontSize: 15,fontWeight:'bold' }}>cb</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    crunchBase:{
        backgroundColor:'#1F9FFC',
        borderRadius:50,
        paddingHorizontal:5, 
        paddingTop:2,
        paddingBottom:3
    }
})


export {
    FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon
}