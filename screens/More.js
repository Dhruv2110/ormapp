import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Notifications from './Notifications'
import Settings from './Settings'

function MoreScreen({ navigation }) {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.push('Notifications')}>
                    <Text style={styles.text} >
                        {`Notifications                          `}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Settings')}>
                    <Text style={styles.text}>
                        {`Settings                                  `}
                    </Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
            <Stack.Navigator initialRouteName="More">
            <Stack.Screen name="More" component={MoreScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        height: '65%',
        alignItems: 'flex-start',
    },
    text: {
        color:'white',
        fontSize: 27,
        marginLeft:25,
        marginTop:'10%',
        lineHeight:70,
        borderBottomWidth:2,
        borderBottomColor: 'white'
    }
});
