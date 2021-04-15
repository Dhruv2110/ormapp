import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RNSpeedometer from 'react-native-speedometer'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'

import TickIcon from '../components/Icons/Tick'
import CrossIcon from '../components/Icons/Cross'
import EditIcon from '../components/Icons/Edit'

import Notifications from './Notifications'
import Measure from './Measure'


const Connections = ( { navigation } ) => {
    const [twitterURL,setTwitterURL] = useState("")
    const [facebookURL,setFacebookURL] = useState("")
    const [linkedinURL,setLinkedinURL] = useState("")
    const [websiteURL,setWebsiteURL] = useState("")
    const [pinterestURL,setPinterestURL] = useState("")
    const [youtubeURL,setYoutubeURL] = useState("")
    const [mediumURL,setMediumURL] = useState("")
    const [crunchbaseURL,setCrunchbaseURL] = useState("")

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


                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <TwitterIcon />
                                    <Text style={{ fontSize: 15 }}> TWITTER</Text>
                                </View>
                                <TextInput value={twitterURL} style={styles.input} placeholder="www.demosite.url.com"
                                onChangeText={(e) => setTwitterURL(e.value)}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <TickIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <FacebookIcon />
                                    <Text style={{ fontSize: 15 }}> FACEBOOK</Text>
                                </View>
                                <TextInput value={facebookURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <TickIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <LinkedInIcon />
                                    <Text style={{ fontSize: 15 }}> LINKEDIN</Text>
                                </View>
                                <TextInput value={linkedinURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <TickIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <WebsiteIcon />
                                    <Text style={{ fontSize: 15 }}> WEBSITE</Text>
                                </View>
                                <TextInput value={websiteURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <PinterestIcon />
                                    <Text style={{ fontSize: 15 }}> PINTEREST</Text>
                                </View>
                                <TextInput value={pinterestURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <YoutubeIcon />
                                    <Text style={{ fontSize: 15 }}> YOUTUBE</Text>
                                </View>
                                <TextInput value={youtubeURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <MediumIcon />
                                    <Text style={{ fontSize: 15 }}> MEDIUM</Text>
                                </View>
                                <TextInput value={mediumURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>


                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <CrunchBaseIcon />
                                    <Text style={{ fontSize: 15 }}> CRUNCHBASE</Text>
                                </View>
                                <TextInput value={crunchbaseURL} style={styles.input} placeholder="www.demosite.url.com"></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.buttonSave} onPress={() => {}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>SAVE CONNECTIONS</Text>
                        </TouchableOpacity>
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


    textBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingTop: 5,
        elevation: 5,
        shadowColor: 'rgba(0,0,0, .8)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    input: {
        margin: 7,
        height: 25,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 10
    },
    col1: {
        alignItems: 'flex-start',
        width: '70%',
        marginLeft: 5
    },
    col2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
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

