import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RNSpeedometer from 'react-native-speedometer'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'

import TickIcon from '../components/Icons/Tick'
import CrossIcon from '../components/Icons/Cross'

import Notifications from './Notifications'
import Measure from './Measure'
import CardConn from '../components/cards/CardConn'


const Connections = ( { navigation } ) => {
    return (
        <>
            <Header navigate={navigation} />
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
                        <CardConn siteIcon={<MediumIcon />} site='MEDIUM' checkIcon={<CrossIcon />}/>
                        <CardConn siteIcon={<CrunchBaseIcon />} site='CRUNCHBASE' checkIcon={<CrossIcon />}/>
                        <Footer />
                        <View style={{height:100}}></View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Connections">
            <Stack.Screen name="Connections" component={Connections} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications}
                options={{
                    title: 'Notifications',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#191919',

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    }
                }} />
            <Stack.Screen name="Measure" component={Measure} options={{ headerShown: false }} />
        </Stack.Navigator>
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

