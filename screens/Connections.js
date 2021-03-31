import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwitterIcon from '../components/Icons/Twitter'
import FacebookIcon from '../components/Icons/Facebook'
import LinkedInIcon from '../components/Icons/LinkedIn'
import WebsiteIcon from '../components/Icons/Website'
import PinterestIcon from '../components/Icons/Pinterest'
import YoutubeIcon from '../components/Icons/Youtube'
import EditIcon from '../components/Icons/Edit'
import TickIcon from '../components/Icons/Tick'
import CrossIcon from '../components/Icons/Cross'


export default function App() {
    return (
        <>
            <Header />
            <ScrollView>
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
                                <TextInput style={styles.input} placeholder="www.demosite.url.com"></TextInput>
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
                                <TextInput style={styles.input} placeholder="www.demosite.url.com"></TextInput>
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
                                <TextInput style={styles.input} placeholder="www.demosite.url.com"></TextInput>
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
                                <TextInput style={styles.input} placeholder=""></TextInput>
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
                                <TextInput style={styles.input} placeholder=""></TextInput>
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
                                <TextInput style={styles.input} placeholder=""></TextInput>
                            </View>
                            <View style={styles.col2}>
                                <EditIcon />
                                <CrossIcon />
                            </View>
                        </View>
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
    image: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        marginBottom: 30,
        alignItems: 'center',
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
        paddingTop:5
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
        alignItems:'flex-start',
        width:'70%',
        marginLeft:5
    },
    col2: {
        flexDirection: 'row',
    }
});

