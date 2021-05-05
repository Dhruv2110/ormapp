import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SnackBar from 'react-native-snackbar-component'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, Pressable } from "react-native";

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native'

// import Login from '../App'

import { MailIcon, LockIcon, EyeOpen, EyeSlash } from '../components/Icons/LoginIcons'
import * as Auth from '../api/auth';

const Reset = ({ navigation }) => {

    const [snackbar, setsnackbar] = useState(false)
    const [snackbarText, setsnackbarText] = useState("")

    const [forgetModal, setForgetModal] = useState(false);
    // const [email,setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [EyeIcon, ChangeEye] = useState(false)
    const [loading, setLoading] = useState(false)
    const [action, setAction] = useState(false)


    // useEffect(() => {
    //     // setInterval(() => {
    //     //     setLoading(false);
    //     // }, 3000);
    // }, [])

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const onDismissSnackBar = () => setsnackbar(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(String(password));
    }

    const actionHandle = () =>{

    }

    const handleSubmit = async () => {
        // setLoading(true)
        //navigation.navigate('HomeScreen')
        if (password == cnfPassword)
        {
            let email = await AsyncStorage.getItem('@email');
            if (validatePassword(password)) {
                await resetPassword({ email, password });
            }
            else {
                console.log('validate error')
                setsnackbar(true)
                setsnackbarText("Please Enter Valid Email")
                setLoading(false)
            }
        }
        else
        {
            setsnackbar(true)
            setsnackbarText("Passwords Must Match")
            setLoading(false)
        }

    }

    const resetPassword = async (email,password) => {
        
        Auth
            .reset( email,password )
            .then(async (response) => {
                console.log(response.data)
                var code = response.data.code
                if (code == -1) {
                    setLoading(false)
                    setsnackbarText("User Not Found. Please Register")
                    setsnackbar(true)

                }
                else if (code == 1) {
                    setLoading(false)
                    setsnackbarText("Password Changed Successfully")
                    setsnackbar(true)
                    setTimeout(() => { navigation.popToTop() }, 3000);
                    

                }
                else {
                    setLoading(false)
                    setsnackbarText("Some Error Occured.Please Try Again")
                    setsnackbar(true)
                }


            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setsnackbarText("Some Error Occurred.Please Try again")
                setsnackbar(true)
            })
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
                    // actionHandler={() => navigation.popToTop()}
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
                    <Text style={{ fontSize: 20 }}>Enter New Password</Text>
                    <View style={styles.password}>
                        <LockIcon />
                        <TextInput
                            defaultValue={password}
                            style={{ paddingHorizontal: 5, width: '80%' }}
                            placeholder='Enter New Password'
                            secureTextEntry={EyeIcon ? false : true}
                            onChangeText={(e) => setPassword(e)}>
                        </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen /> : <EyeSlash />}
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 10 }}>(Password must contains atleast 8 digits, 1 special char and 1 number)</Text>
                    <View style={styles.password}>
                        <LockIcon />
                        <TextInput
                            defaultValue={cnfPassword}
                            style={{ paddingHorizontal: 5, width: '80%' }}
                            placeholder='Confirm New Password'
                            secureTextEntry={EyeIcon ? false : true}
                            onChangeText={(e) => setCnfPassword(e)}>
                        </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen /> : <EyeSlash />}
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 10 }}>(Password must contains atleast 8 digits, 1 special char and 1 number)</Text>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                        <Text style={{ color: 'white', fontSize: 20 }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
export default Reset

// const Stack = createStackNavigator();

// export default function App() {
//     return (
//         <Stack.Navigator initialRouteName="Reset">
//             <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }} />
//                 <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//             </Stack.Navigator>
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