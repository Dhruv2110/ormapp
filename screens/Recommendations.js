import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Header from '../components/Header'
import Footer from '../components/Footer'
import TwitterIcon from '../components/Icons/Twitter'
import FacebookIcon from '../components/Icons/Facebook'
import LinkedInIcon from '../components/Icons/LinkedIn'
import WebsiteIcon from '../components/Icons/Website'
import PinterestIcon from '../components/Icons/Pinterest'
import YoutubeIcon from '../components/Icons/Youtube'
import MediumIcon from '../components/Icons/Medium'

import CardRecomm from '../components/cards/CardRecomm'


export default function Recommendations() {
    return (
        <>
        <Header />
            <ScrollView style={{ backgroundColor: '#191919' }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Our Recommendations</Text>
                    <Text style={styles.text}>{`Last Updated: Jan 5, 2021`}</Text>
                    <View style={styles.card}>
                        <CardRecomm icon={<TwitterIcon />} site='twitter'/>
                        <CardRecomm icon={<FacebookIcon />} site='facebook'/>
                        <CardRecomm icon={<LinkedInIcon />} site='linkedin'/>
                        <CardRecomm icon={<WebsiteIcon />} site='website'/>
                        <CardRecomm icon={<PinterestIcon />} site='pinterest'/>
                        <CardRecomm icon={<YoutubeIcon />} site='youtube'/>
                        <CardRecomm icon={<MediumIcon />} site='medium'/>
                        <Footer />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    heading: {
        margin: 10,
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    text: {
        margin: 10,
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    card: {
        marginTop: 10,
        backgroundColor: '#D1D1D1',
        height: '90%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20
    }
});

