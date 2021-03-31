import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwitterIcon from '../components/Socialicons/Twitter'
import FacebookIcon from '../components/Socialicons/Facebook'
import LinkedInIcon from '../components/Socialicons/LinkedIn'
import WebsiteIcon from '../components/Socialicons/Website'
import PinterestIcon from '../components/Socialicons/Pinterest'
import YoutubeIcon from '../components/Socialicons/Youtube'


export default function App() {
    return (
        <>
        <Header />
            <ScrollView>
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
                                <Text style={{ fontSize: 15, paddingBottom: 4  }}> www.facebook.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <LinkedInIcon />
                                <Text style={{ fontSize: 15, paddingBottom: 4  }}> www.linkedin.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <WebsiteIcon />
                                <Text style={{ fontSize: 15, paddingBottom: 4 }}> www.website.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <PinterestIcon />
                                <Text style={{ fontSize: 15, paddingBottom: 4 }}> www.pinterest.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.row}>
                                <YoutubeIcon />
                                <Text style={{ fontSize: 15,paddingBottom:4 }}> www.youtube.com/example</Text>
                            </View>
                            <TextInput style={styles.input} placeholder="Add Keyword 1 to page and Meta Description"></TextInput>
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
        backgroundColor: 'white',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 85,
        borderRadius: 15,
        marginBottom: 12,
        paddingLeft: 20
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
        marginTop:10
    }
});

