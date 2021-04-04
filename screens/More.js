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
            <View style={{ backgroundColor:'#191919',justifyContent: 'space-around' }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.push('Notifications')}>
                        <Text style={styles.text} >
                            {`Notifications `}
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignSelf: 'center',
                            width: '90%',
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.push('Settings')}>
                        <Text style={styles.text}>
                            {`Settings`}
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignSelf: 'center',
                            width: '90%',
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                        }}
                    />
                </View>
                <View style={styles.card}>
                <Footer />
                </View>
            </View>
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
        height: '70%',
        // maxHeight:'70%',
        // alignItems: 'flex-start'
    },
    text: {
        color:'white',
        fontSize: 26,
        marginLeft:25,
        marginTop:'10%',
        lineHeight:70,
    },
    card: {
        marginBottom: 10,
        backgroundColor: '#D1D1D1',
        height: '35%',
        alignItems: 'center',
        padding: 20,
    }
});
