import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RNSpeedometer from 'react-native-speedometer'
import Spinner from 'react-native-loading-spinner-overlay';
import SnackBar from 'react-native-snackbar-component'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'


import CardConn from '../components/cards/CardConn'
import TickIcon from '../components/Icons/Tick'
import CheckIcon from '../components/Icons/Check'
import CrossIcon from '../components/Icons/Cross'
import EditIcon from '../components/Icons/Edit'

import Notifications from './Notifications'
import Measure from './Measure'

import * as Auth from '../api/auth';
import * as Connection from '../api/connections'

const Connections = ( { navigation } ) => {
    var total = 0
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [score, setScore] = useState(total)
    const [snackbar, setsnackbar] = useState(false)
    const [snackbarText, setsnackbarText] = useState("")

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

    const [twitterEdit, setTwitterEdit] = useState(true)
    const [facebookEdit, setFacebookEdit] = useState(true)
    const [linkedinEdit, setLinkedinEdit] = useState(true)
    const [websiteEdit, setWebsiteEdit] = useState(true)
    const [pinterestEdit, setPinterestEdit] = useState(true)
    const [youtubeEdit, setYoutubeEdit] = useState(true)
    const [mediumEdit, setMediumEdit] = useState(true)
    const [crunchbaseEdit, setCrunchbaseEdit] = useState(true)

    const [twitterEn, setTwitterEn] = useState(false)
    const [facebookEn, setFacebookEn] = useState(false)
    const [linkedinEn, setLinkedinEn] = useState(false)
    const [websiteEn, setWebsiteEn] = useState(false)
    const [pinterestEn, setPinterestEn] = useState(false)
    const [youtubeEn, setYoutubeEn] = useState(false)
    const [mediumEn, setMediumEn] = useState(false)
    const [crunchbaseEn, setCrunchbaseEn] = useState(false)

    const onDismissSnackBar = () => setsnackbar(false);


    async function fetchConnections() {
        setLoading(true)
        let connections = await Connection.getConnections()
        if (connections.twitter) {
            setTwitterURL(connections.twitter.URL)
            setTwitterCheck(connections.twitter.isValid)
            if (connections.twitter.isValid) { total += 1 }

        }
        if (connections.facebook) {
            setFacebookURL(connections.facebook.URL)
            setFacebookCheck(connections.facebook.isValid)
            if (connections.facebook.isValid) { total += 1 }
        }
        if (connections.linkedin) {
            setLinkedinURL(connections.linkedin.URL)
            setLinkedinCheck(connections.linkedin.isValid)
            if (connections.linkedin.isValid) { total += 1 }
        }
        if (connections.website) {
            setWebsiteURL(connections.website.URL)
            setWebsiteCheck(connections.website.isValid)
            if (connections.website.isValid) { total += 1 }
        }
        if (connections.pinterest) {
            setPinterestURL(connections.pinterest.URL)
            setPinterestCheck(connections.pinterest.isValid)
            if (connections.pinterest.isValid) { total += 1 }
        }
        if (connections.youtube) {
            setYoutubeURL(connections.youtube.URL)
            setYoutubeCheck(connections.youtube.isValid)
            if (connections.youtube.isValid) { total += 1 }
        }
        if (connections.medium) {
            setMediumURL(connections.medium.URL)
            setMediumCheck(connections.medium.isValid)
            if (connections.medium.isValid) { total += 1 }
        }
        if (connections.crunchbase) {
            setCrunchbaseURL(connections.crunchbase.URL)
            setCrunchbaseCheck(connections.crunchbase.isValid)
            if (connections.crunchbase.isValid) { total += 1 }
        }
        var Speed = (total / 8) * 100
        setScore(Speed)
        setLoading(false)
    }

    useEffect(() => {
        
        fetchConnections()
    }, [])

    const CheckURL = async (url) => {

        console.log(url[1] == "")

        if(url[1] != "")
        {
            setSaving(true)
            var toSend = { data: url }
            console.log(toSend)
            saveConnections(toSend)
        }
        else if(url[1] == "")
        {
            // setsnackbarText("Check Connection URL")
            // setsnackbar(true)
            // setSaving(true)
            console.log(url)
            const { msg, saved, valid } = await Connection.emptyConnections(url);
            if (saved == true || url[0] == "twitter") {
                setTwitterEdit(true)
                setTwitterEn(false)
                setTwitterCheck(false)
            }

            if (saved == true || url[0] == "facebook") {
                setFacebookEdit(true)
                setFacebookEn(false)
                setFacebookCheck(false)
            }
            if (saved == true || url[0] == "linkedin") {
                setLinkedinEdit(true)
                setLinkedinEn(false)
                setLinkedinCheck(false)
            }
            if (saved == true || url[0] == "website") {
                setWebsiteEdit(true)
                setWebsiteEn(false)
                setWebsiteCheck(false)
            }
            if (saved == true || url[0] == "pinterest") {
                setPinterestEdit(true)
                setPinterestEn(false)
                setPinterestCheck(false)
            }
            if (saved == true || url[0] == "youtube") {
                setYoutubeEdit(true)
                setYoutubeEn(false)
                setYoutubeCheck(false)
            }
            if (saved == true || url[0] == "medium") {
                setMediumEdit(true)
                setMediumEn(false)
                setMediumCheck(false)
            }
            if (saved == true || url[0] == "crunchbase") {
                setCrunchbaseEdit(true)
                setCrunchbaseEn(false)
                setCrunchbaseCheck(false)
            }
            // setSaving(false)
            fetchConnections()
        }
        
    }

    const saveConnections = async (url) => {
        console.log(url)
        try{
            const { msg, saved, valid } = await Connection.saveConnections(url);
            console.log(msg, saved, valid)
            if (url.data[0] == "twitter") {
                setTwitterEdit(true)
                setTwitterEn(false)
                setTwitterCheck(valid)
            }

            if (url.data[0] == "facebook") {
                setFacebookEdit(true)
                setFacebookEn(false)
                setFacebookCheck(valid)
            }
            if (url.data[0] == "linkedin") {
                setLinkedinEdit(true)
                setLinkedinEn(false)
                setLinkedinCheck(valid)
            }
            if (url.data[0] == "website") {
                setWebsiteEdit(true)
                setWebsiteEn(false)
                setWebsiteCheck(valid)
            }
            if (url.data[0] == "pinterest") {
                setPinterestEdit(true)
                setPinterestEn(false)
                setPinterestCheck(valid)
            }
            if (url.data[0] == "youtube") {
                setYoutubeEdit(true)
                setYoutubeEn(false)
                setYoutubeCheck(valid)
            }
            if (url.data[0] == "medium") {
                setMediumEdit(true)
                setMediumEn(false)
                setMediumCheck(valid)
            }
            if (url.data[0] == "crunchbase") {
                setCrunchbaseEdit(true)
                setCrunchbaseEn(false)
                setCrunchbaseCheck(valid)
            }
            setSaving(false)
            fetchConnections()
            setsnackbarText("Connection Saved Successfully")
        }

        catch (error) {
            console.log(error)
            setSaving(false)
            setLoading(false)
            setsnackbarText("Some Error Occurred.Try again")
            setsnackbar(true)
        }
        
        // router.push()
    }

    const onRefresh = () => {
        setRefreshing(true);
        fetchConnections();
        setRefreshing(false);
    };

    return (
        <>
            <Header navigate={navigation} />
            <SnackBar visible={snackbar}
                bottom={10}
                containerStyle={{ width: '90%', marginHorizontal: 20, borderRadius: 10 }}
                autoHidingTime={0}
                textMessage={snackbarText}
                actionHandler={() => onDismissSnackBar()}
                actionText="OK"
                accentColor='#ff9933' />
            <ScrollView style={{ backgroundColor: '#191919' }} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                
                <Spinner
                    visible={loading}
                    textContent={'Loading Connections...Please Wait...'}
                    textStyle={{ color: '#FFF' }}
                />
                <Spinner
                    visible={saving}
                    textContent={'Verifying Connection...Please Wait...'}
                    textStyle={{ color: '#FFF' }}
                />
                <View style={{ backgroundColor:'#191919',paddingVertical:10,height:'20%'}}>
                    <RNSpeedometer 
                    value={score} 
                    size={300}
                    labels= {[
                            {
                                name: '1',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '2',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '3',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '4',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '5',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '6',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                            {
                                name: '7',
                                labelColor: '#191919',
                                activeBarColor: '#ADD8E6',
                            },
                        {
                            name: '8',
                            labelColor: '#191919',
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
                        <Text style={{ fontSize: 15, fontStyle: 'italic', marginBottom: 5, marginTop: -10 }}>(Pull to refresh)</Text>
                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <TwitterIcon />
                                    <Text style={{ fontSize: 15 }}> TWITTER</Text>
                                </View>
                                <TextInput editable={twitterEn} defaultValue={twitterURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setTwitterURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {twitterEdit
                                    ? <TouchableOpacity onPress={() => { setTwitterEn(true); setTwitterEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["twitter",twitterURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {twitterCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <FacebookIcon />
                                    <Text style={{ fontSize: 15 }}> FACEBOOK</Text>
                                </View>
                                <TextInput editable={facebookEn} defaultValue={facebookURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setFacebookURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {facebookEdit
                                    ? <TouchableOpacity onPress={() => { setFacebookEn(true); setFacebookEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["facebook",facebookURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {facebookCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <LinkedInIcon />
                                    <Text style={{ fontSize: 15 }}> LINKEDIN</Text>
                                </View>
                                <TextInput editable={linkedinEn} defaultValue={linkedinURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setLinkedinURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {linkedinEdit
                                    ? <TouchableOpacity onPress={() => { setLinkedinEn(true); setLinkedinEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["linkedin",linkedinURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {linkedinCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <WebsiteIcon />
                                    <Text style={{ fontSize: 15 }}> WEBSITE</Text>
                                </View>
                                <TextInput editable={websiteEn} defaultValue={websiteURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setWebsiteURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {websiteEdit
                                    ? <TouchableOpacity onPress={() => { setWebsiteEn(true); setWebsiteEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["website",websiteURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {websiteCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <PinterestIcon />
                                    <Text style={{ fontSize: 15 }}> PINTEREST</Text>
                                </View>
                                <TextInput editable={pinterestEn} defaultValue={pinterestURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setPinterestURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {pinterestEdit
                                    ? <TouchableOpacity onPress={() => { setPinterestEn(true); setPinterestEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["pinterest",pinterestURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {pinterestCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <YoutubeIcon />
                                    <Text style={{ fontSize: 15 }}> YOUTUBE</Text>
                                </View>
                                <TextInput editable={youtubeEn} defaultValue={youtubeURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setYoutubeURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {youtubeEdit
                                    ? <TouchableOpacity onPress={() => { setYoutubeEn(true); setYoutubeEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["youtube",youtubeURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {youtubeCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <MediumIcon />
                                    <Text style={{ fontSize: 15 }}> MEDIUM</Text>
                                </View>
                                <TextInput editable={mediumEn} defaultValue={mediumURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setMediumURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {mediumEdit
                                    ? <TouchableOpacity onPress={() => { setMediumEn(true); setMediumEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["medium",mediumURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {mediumCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                                <View style={styles.row}>
                                    <CrunchBaseIcon />
                                    <Text style={{ fontSize: 15 }}> CRUNCHBASE</Text>
                                </View>
                                <TextInput editable={crunchbaseEn} defaultValue={crunchbaseURL} style={styles.input} placeholder="www.demosite.url.com"
                                    onChangeText={(e) => setCrunchbaseURL(e.trim())}></TextInput>
                            </View>
                            <View style={styles.col2}>
                                {crunchbaseEdit
                                    ? <TouchableOpacity onPress={() => { setCrunchbaseEn(true); setCrunchbaseEdit(false) }}>
                                        <EditIcon />
                                    </TouchableOpacity>
                            
                                    : <TouchableOpacity onPress={() => CheckURL(["crunchbase",crunchbaseURL])}>
                                        <CheckIcon />
                                    </TouchableOpacity> }
                                {crunchbaseCheck ? <TickIcon /> : <CrossIcon />}
                            </View>
                        </View>

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

