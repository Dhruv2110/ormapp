import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
                        <CardRecomm icon={<TwitterIcon />} site='twitter'/>
                        <CardRecomm icon={<FacebookIcon />} site='facebook'/>
                        <CardRecomm icon={<LinkedInIcon />} site='linkedin'/>
                        <CardRecomm icon={<WebsiteIcon />} site='website'/>
                        <CardRecomm icon={<PinterestIcon />} site='pinterest'/>
                        <CardRecomm icon={<YoutubeIcon />} site='youtube'/>
                        <CardRecomm icon={<MediumIcon />} site='medium'/>
                        <CardRecomm icon={<CrunchBaseIcon />} site='crunchbase'/>
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
    }
});

