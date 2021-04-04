import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RNSpeedometer from 'react-native-speedometer'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwitterIcon from '../components/Icons/Twitter'
import FacebookIcon from '../components/Icons/Facebook'
import LinkedInIcon from '../components/Icons/LinkedIn'
import WebsiteIcon from '../components/Icons/Website'
import PinterestIcon from '../components/Icons/Pinterest'
import YoutubeIcon from '../components/Icons/Youtube'
import TickIcon from '../components/Icons/Tick'
import CrossIcon from '../components/Icons/Cross'


import CardConn from '../components/cards/CardConn'


export default function App() {
    return (
        <>
            <Header />
            <ScrollView style={{ backgroundColor: '#191919' }}>
                <View style={{ backgroundColor:'#191919',paddingVertical:10,height:'20%'}}>
                    <RNSpeedometer 
                    value={30} 
                    size={300}
                    labels= {[
                            {
                            activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                activeBarColor: '#ADD8E6',
                            }]}
                        innerCircleStyle={{ backgroundColor: '#191919' }}
                    labelStyle={{ color: 'white'}}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Connections</Text>
                    <Text style={styles.text}>{`Tell us the URLs of your social \n network profiles and/or\nwebsite(s)`}</Text>
                    <View style={styles.card}>
                        <CardConn siteIcon={<TwitterIcon />} site='TWITTER' checkIcon={<TickIcon />}/>
                        <CardConn siteIcon={<FacebookIcon />} site='FACEBOOK' checkIcon={<TickIcon />}/>
                        <CardConn siteIcon={<LinkedInIcon />} site='LINKEDIN' checkIcon={<TickIcon />}/>
                        <CardConn siteIcon={<WebsiteIcon />} site='WEBSITE' checkIcon={<CrossIcon />}/>
                        <CardConn siteIcon={<PinterestIcon />} site='PINTEREST' checkIcon={<CrossIcon />}/>
                        <CardConn siteIcon={<YoutubeIcon />} site='YOUTUBE' checkIcon={<CrossIcon />}/>
                        <Footer />
                        <View style={{height:30}}></View>
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
        margin: 5,
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    text: {
        marginTop: 5,
        marginBottom:7,
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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

