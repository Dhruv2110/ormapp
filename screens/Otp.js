import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SnackBar from 'react-native-snackbar-component'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, Pressable } from "react-native";

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native'

import Reset from './Reset'

import { MailIcon, LockIcon, EyeOpen, EyeSlash } from '../components/Icons/LoginIcons'
import * as Auth from '../api/auth';

const Otp = ({ navigation }) => {

    const [snackbar, setsnackbar] = useState(false)
    const [snackbarText, setsnackbarText] = useState("")

    const [forgetModal, setForgetModal] = useState(false);
    const [otp,setOtp] = useState('')
    const [email,setEmail] = useState('')
    const [EyeIcon, ChangeEye] = useState(false)
    const [loading, setLoading] = useState(false)


    // useEffect(() => {
    //     // setInterval(() => {
    //     //     setLoading(false);
    //     // }, 3000);
    // }, [])

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const onDismissSnackBar = () => setsnackbar(false);


    const otpCheck = async () => {
        setLoading(true)
        let email = await AsyncStorage.getItem('@email');
        console.log(email,otp)
        var result = await Auth.chechOtp({email,otp})
        console.log(result)
        if(result.data.code == 1){
            setLoading(false)
            navigation.navigate('Reset')
        }
        else{
            setLoading(false)
            setsnackbar(true)
            setsnackbarText("Invalid OTP")
        }

    }


    return (
        <>
            <View style={styles.container}>
                <Spinner
                    visible={loading}
                    textContent={'Please Wait...'}
                    textStyle={{ color: '#FFF' }}
                />
                <SnackBar visible={snackbar}
                    bottom={10}
                    containerStyle={{ width: '90%', marginHorizontal: 20, borderRadius: 10 }}
                    autoHidingTime={0}
                    textMessage={snackbarText}
                    actionHandler={() => onDismissSnackBar()}
                    actionText="OK"
                    accentColor='#ff9933' />
                <View style={styles.head}>
                    <View style={{ alignItems: 'center', marginVertical: 30 }}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: 220, height: 95 }}
                        />
                        {/* <Text style={{ color: '#54585A',fontSize:20}}>ORM Optimizer</Text> */}
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headText}>Reset Password,</Text>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <Text style={{ fontSize: 20 }}>Enter OTP</Text>
                    <View style={styles.password}>
                        <LockIcon />
                        <TextInput
                            defaultValue={otp}
                            style={{ paddingHorizontal: 5, width: '80%' }}
                            placeholder='OTP'
                            secureTextEntry={EyeIcon ? false : true}
                            onChangeText={(e) => setOtp(e)}>
                        </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen /> : <EyeSlash />}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={otpCheck} >
                        <Text style={{ color: 'white', fontSize: 20 }}>VERIFY OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default Otp

// const Stack = createStackNavigator();

// export default function App() {
//     return (
//         <Stack.Navigator initialRouteName="Otp">
//             <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
//             <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    head: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headText: {
        color: 'white',
        fontSize: 30,
    },
    card: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: '60%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    email: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: 60,
        // borderWidth: 0.5,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    password: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        height: 60,
        // borderWidth:0.5,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    button: {
        width: '75%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#4169E1',
        marginVertical: 20
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 5
    },
    buttonM: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#4169E1'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonCloseM: {
        // backgroundColor: "#2196F3",
        backgroundColor: "#FFFFFF",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalHeading: {
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 25
    },
    modalContent: {
    },

    forgetModalView: {
        margin: 15,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 5
    },

    btnF: {
        width: '40%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#4169E1',
        marginVertical: 20,
        marginHorizontal: 10
    },

    btnC: {
        width: '40%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#4169E1'
    },
})