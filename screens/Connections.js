import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RNSpeedometer from 'react-native-speedometer'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'


import CardConn from '../components/cards/CardConn'
import TickIcon from '../components/Icons/Tick'
import CrossIcon from '../components/Icons/Cross'
import EditIcon from '../components/Icons/Edit'

import Notifications from './Notifications'
import Measure from './Measure'

import * as Auth from '../api/auth';
import * as Connection from '../api/connections'

const Connections = ( { navigation } ) => {
    const [twitterURL,setTwitterURL] = useState("")
    const [facebookURL,setFacebookURL] = useState("")
    const [linkedinURL,setLinkedinURL] = useState("")
    const [websiteURL,setWebsiteURL] = useState("")
    const [pinterestURL,setPinterestURL] = useState("")
    const [youtubeURL,setYoutubeURL] = useState("")
    const [mediumURL,setMediumURL] = useState("")
    const [crunchbaseURL,setCrunchbaseURL] = useState("")

    const [twitterCheck, setTwitterCheck] = useState(false)
    const [facebookCheck, setFacebookCheck] = useState(false)
    const [linkedinCheck, setLinkedinCheck] = useState(false)
    const [websiteCheck, setWebsiteCheck] = useState(false)
    const [pinterestCheck, setPinterestCheck] = useState(false)
    const [youtubeCheck, setYoutubeCheck] = useState(false)
    const [mediumCheck, setMediumCheck] = useState(false)
    const [crunchbaseCheck, setCrunchbaseCheck] = useState(false)


    // useEffect(async () => {
    //     let user = await Auth.getUser();
    //     setUser(user);
    // }, [])

    // useEffect(async () => {
    //     let connections = await Connection.getConnections()
    //     console.log(connections.twitter)

    //     setTwitterURL(connections.twitter.URL)
    //     setTwitterCheck(connections.twitter.isValid)

    //     setFacebookURL(connections.facebook.URL)
    //     setFacebookCheck(connections.facebook.isValid)

    //     setLinkedinURL(connections.linkedin.URL)
    //     setLinkedinCheck(connections.linkedin.isValid)

    //     setWebsiteURL(connections.website.URL)
    //     setWebsiteCheck(connections.website.isValid)

    //     setPinterestURL(connections.pinterest.URL)
    //     setPinterestCheck(connections.pinterest.isValid)

    //     setYoutubeURL(connections.youtube.URL)
    //     setYoutubeCheck(connections.youtube.isValid)

    //     setMediumURL(connections.medium.URL)
    //     setMediumCheck(connections.medium.isValid)

    //     setCrunchbaseURL(connections.crunchbase.URL)
    //     setCrunchbaseCheck(connections.crunchbase.isValid)


    // }, [])

    const CheckURL = (url) => {
        console.log(url)
        // if (validURL(url))
        // {
        //  saveConnections(url)
        // }
        // else
        // {
        //   console.log("enter valid url")
        // }
    }

    // const saveConnections = async (url) => {
    //     console.log(url)
    //     const { msg, valid } = await Connection.saveConnections(url);
    //     console.log(msg, valid)
    //     // router.push()
    // }

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

                        <CardConn siteIcon={<TwitterIcon />} site={'TWITTER'} URL={twitterURL}
                            checkIcon={twitterCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                                <TextInput defaultValue={twitterURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setTwitterURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<FacebookIcon />} site={'FACEBOOK'} URL={facebookURL}
                            checkIcon={facebookCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput defaultValue={facebookURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setFacebookURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<LinkedInIcon />} site={'LINKEDIN'} URL={linkedinURL}
                            checkIcon={linkedinCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput defaultValue={linkedinURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setLinkedinURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<WebsiteIcon />} site={'WEBSITE'} URL={websiteURL}
                            checkIcon={websiteCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput value={websiteURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setWebsiteURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<PinterestIcon />} site={'PINTEREST'} URL={pinterestURL}
                            checkIcon={pinterestCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput value={pinterestURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setPinterestURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<YoutubeIcon />} site={'YOUTUBE'} URL={youtubeURL}
                            checkIcon={youtubeCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput value={youtubeURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setYoutubeURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<MediumIcon />} site={'MEDIUM'} URL={mediumURL}
                            checkIcon={mediumCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput value={mediumURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setMediumURL(e)}></TextInput>
                            </CardConn>

                        <CardConn siteIcon={<CrunchBaseIcon />} site={'CRUNCHBASE'} URL={crunchbaseURL}
                            checkIcon={crunchbaseCheck ? <TickIcon /> : <CrossIcon />} onCheck={CheckURL}>
                            <TextInput value={crunchbaseURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText ={(e) => setCrunchbaseURL(e)}></TextInput>
                            </CardConn>
                        {/* <TouchableOpacity style={styles.buttonSave} onPress={() => {}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>SAVE CONNECTIONS</Text>
                        </TouchableOpacity> */}
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
        marginTop: -20,
        margin:5,
        color: 'white',
        fontSize: 27,
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
    },

    input: {
        margin: 7,
        height: 25,
        width: '100%'
    },
    buttonSave: {
        width: '85%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#4169E1',
        marginVertical: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
});

