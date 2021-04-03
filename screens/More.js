import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

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
                <Stack.Screen 
                name="Notifications" 
                component={Notifications}  
                options={{
                    title: 'Notifications',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#191919',
                        
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    },
                    headerRight: () => (
                    <Entypo
                        name="dots-three-vertical"
                        size={24} color="white"
                        onClick={() => { }} />
                    )
                }}
               
                />
                <Stack.Screen name="Settings" component={Settings} 
                options={{
                    title: 'Settings',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#191919',

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    },
                    headerRight: () => (
                        <Entypo
                            name="dots-three-vertical"
                            size={24} color="white"
                            onClick={() => { }} />
                    )
                }}
                />
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
