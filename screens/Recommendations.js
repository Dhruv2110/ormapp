import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'

import Notifications from './Notifications'
import Measure from './Measure'
import CardRecomm from '../components/cards/CardRecomm'

import * as Connection from '../api/connections'

const Recommendations = ({ navigation}) => {

    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [twitterRe, setTwitterRe] = useState("")
    const [facebookRe, setFacebookRe] = useState("")
    const [linkedinRe, setLinkedinRe] = useState("")
    const [websiteRe, setWebsiteRe] = useState("")
    const [pinterestRe, setPinterestRe] = useState("")
    const [youtubeRe, setYoutubeRe] = useState("")
    const [mediumRe, setMediumRe] = useState("")
    const [crunchbaseRe, setCrunchbaseRe] = useState("")

    const [data,setData] = useState({})
    
    // useEffect(
    //     () =>
    //         navigation.addListener('beforeRemove', (e) => {

    //             // Prevent default behavior of leaving the screen
    //             e.preventDefault();

    //         }),
    //     [navigation]
    // );

    // useEffect(async () => {
    //     let user = await Auth.getUser();
    //     setUser(user)
    // }, [])

    const setMsg = (link) => {
        var msg = ""
        const {URL, useHttps, hasTitle, hasMetaDesc, hasCanTag } = link
        if(URL == "")
        {
            msg = "Enter Keywords to page and add Meta Description"
            return msg
        }
        if (useHttps && hasTitle && hasMetaDesc && hasCanTag) {
            return msg = "All Parameters Fulfilled"
        }
        if (!useHttps) { msg += "Enable HTTPS." }
        if (!hasTitle) { msg += "Add title." }
        if (!hasMetaDesc) { msg += "Add Meta Description." }
        if (!hasCanTag) { msg += "Add Canonical tag." }

        return msg
    }

    async function fetchConnections() {
        var json = {
            "twitter": '',
            "facebook": '',
            "linkedin": '',
            "website": '',
            "pinterest": '',
            "youtube": '',
            "medium": '',
            "crunchbase": '',
        }
        console.log(json)
        setLoading(true)
        let connections = await Connection.getConnections()
        const { twitter, facebook, linkedin, pinterest, website, youtube, medium, crunchbase } = connections

        if (twitter.URL) {
            json["twitter"] = twitter.URL
        }
        if (facebook.URL) {
            json["facebook"] = facebook.URL
        }
        if (linkedin.URL) {
            json["linkedin"] = linkedin.URL
        }
        if (pinterest.URL) {
            json["pinterest"] = pinterest.URL
        }
        if (website.URL) {
            json["website"] = website.URL
        }
        if (youtube.URL) {
            json["youtube"] = youtube.URL
        }
        if (medium.URL) {
            json["medium"] = medium.URL
        }
        if (crunchbase.URL) {
            json["crunchbase"] = crunchbase.URL
        }
        console.log("json data",json)
        setData(json)
        setTwitterRe(setMsg(twitter))
        setFacebookRe(setMsg(facebook))
        setLinkedinRe(setMsg(linkedin))
        setPinterestRe(setMsg(pinterest))
        setWebsiteRe(setMsg(website))
        setYoutubeRe(setMsg(youtube))
        setMediumRe(setMsg(medium))
        setCrunchbaseRe(setMsg(crunchbase))
        setLoading(false)
    }

    useEffect(() => { 

        fetchConnections()
    }, [])

    const onRefresh = () => {
        setRefreshing(true);
        fetchConnections();
        setRefreshing(false);
    };

    return (
        <>
            <Header navigate={navigation} />
            <ScrollView style={{ backgroundColor: '#191919' }} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Spinner
                    visible={loading}
                    textContent={'Loading Recommendations...Please Wait...'}
                    textStyle={{ color: '#FFF' }}
                />
                <View style={styles.container}>
                    <Text style={styles.heading}>Our Recommendations</Text>
                    <Text style={styles.text}>{`Last Updated: Jan 5, 2021`}</Text>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 15, fontStyle: 'italic', marginBottom: 5, marginTop: -10 }}>(Pull to refresh)</Text>
                        <CardRecomm icon={<TwitterIcon />} site={data.twitter  || "www.twitter.com/example"}>
                            <TextInput multiline={true} defaultValue={twitterRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<FacebookIcon />} site={data.facebook || "www.facebook.com/example"}>
                            <TextInput multiline={true} defaultValue={facebookRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<LinkedInIcon />} site={data.linkedin || "www.linkedin.com/example"}>
                            <TextInput multiline={true} defaultValue={linkedinRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<WebsiteIcon />} site={data.website || "www.website.com/example"}>
                            <TextInput multiline={true} defaultValue={websiteRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<PinterestIcon />} site={data.pinterest || "www.pinterest.com/example"}>
                            <TextInput multiline={true} defaultValue={pinterestRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<YoutubeIcon />} site={data.youtube || "www.youtube.com/example"}>
                            <TextInput multiline={true} defaultValue={youtubeRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<MediumIcon />} site={data.medium || "www.medium.com/example"}>
                            <TextInput multiline={true} defaultValue={mediumRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>

                        <CardRecomm icon={<CrunchBaseIcon />} site={data.crunchbase || "www.crunchbase.com/example"}>
                            <TextInput multiline={true} defaultValue={crunchbaseRe} editable={false} style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </CardRecomm>


                        <View style={{ position: 'relative', bottom: '0%' }}>
                            <Footer />
                        </View>
                        {/* <View style={{ height: 100 }}></View> */}
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Recommendations">
            <Stack.Screen name="Recommendations" component={Recommendations} options={{ headerShown: false }} />
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
    },

    textBox: {
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingLeft: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    input: {
        margin: 7,
        height: 35,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 10
    }
});

