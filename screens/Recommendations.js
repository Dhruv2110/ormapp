import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon, CrunchBaseIcon } from '../components/Icons/SocialIcons'

import Notifications from './Notifications'
import Measure from './Measure'
import CardRecomm from '../components/cards/CardRecomm'


const Recommendations = ({ navigation}) => {
    return (
        <>
            <Header navigate={navigation} />
            <ScrollView style={{ backgroundColor: '#191919' }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Our Recommendations</Text>
                    <Text style={styles.text}>{`Last Updated: Jan 5, 2021`}</Text>
                    <View style={styles.card}>

                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <TwitterIcon />
                                <Text style={{ fontSize: 15 }}> www.twitter.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <FacebookIcon />
                                <Text style={{ fontSize: 15 }}> www.facebook.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <LinkedInIcon />
                                <Text style={{ fontSize: 15 }}> www.linkedin.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <WebsiteIcon />
                                <Text style={{ fontSize: 15 }}> www.website.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <PinterestIcon />
                                <Text style={{ fontSize: 15 }}> www.pinterest.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <YoutubeIcon />
                                <Text style={{ fontSize: 15 }}> www.youtube.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <MediumIcon />
                                <Text style={{ fontSize: 15 }}> www.medium.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <CrunchBaseIcon />
                                <Text style={{ fontSize: 15 }}> www.crunchbase.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>

                        <Footer />
                        <View style={{ height: 100 }}></View>
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
        height: 25,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 10
    }
});

