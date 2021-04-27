import React, { useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SnackBar from 'react-native-snackbar-component'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, Pressable } from "react-native";

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native'

import SignUp from './screens/SignUp'
import HomeScreen from './HomeScreen'

import { MailIcon, LockIcon,EyeOpen,EyeSlash } from './components/Icons/LoginIcons'
import * as Auth from './api/auth';

const Login = ({navigation}) => {

    const [snackbar, setsnackbar] = useState(false)
    const [snackbarText, setsnackbarText] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState("");

    // const { valid } = route.params;
    // if (valid)
    // {
    //     setsnackbarText("Signup Successfull.Please Signin")
    //     setsnackbar(true)
    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [EyeIcon,ChangeEye] = useState(false)
    const [loading,setLoading] = useState(false)
    
    
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
        return re.test(String(email));
    }

    const handleSubmit = async e => {
        setLoading(true)
        //navigation.navigate('HomeScreen')
        if (validateEmail(email) && validatePassword) {
            await loginUser({
                email,
                password
            });
        }
        else {
            console.log('validate error')
            setsnackbar(true)
            setsnackbarText("Please Check Details.")
            setLoading(false)
        }

    }

    const loginUser = async (credentials) => {
        console.log(credentials)
        Auth
            .login(credentials)
            .then( async (response) => {
                //console.log(await AsyncStorage.getItem('@user'))
                console.log(response.data)
                var code = response.data.code
                if(code == -1)
                {
                    setLoading(false)
                    setModalText("User/Email Not Found.Please SignUp")
                    setModalVisible(true)
                }
                else if(code == -2)
                {
                    setLoading(false)
                    setModalText("Incorrect Password")
                    setModalVisible(true)
                }
                else if(code == 1)
                {
                    await AsyncStorage.setItem('@user', response.data.user.email)
                    await AsyncStorage.setItem('@accessToken', response.data.accessToken)
                    await AsyncStorage.setItem('@refreshToken', response.data.refreshToken)
                    await AsyncStorage.setItem('@expiresIn', response.data.expiresIn)
                    setLoading(false)
                    navigation.replace('HomeScreen')
                }
                
            })
            // .then(() => { setLoading(false),navigation.replace('HomeScreen')})
            .catch(err => {
                console.log(err)
                setLoading(false)
                setsnackbarText("Some Error Occurred.Try again")
                setsnackbar(true)
            })
    }

    return(
        <>
                <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalHeading}>{modalText}</Text>
                            {/* <View style={styles.modalContent}>
                                <Text style={{ marginBottom: 10, fontSize: 20 }}>- My Company Name</Text>
                                <Text style={{ marginBottom: 10, fontSize: 20 }}>- My Brand Name</Text>
                                <Text style={{ marginBottom: 10, fontSize: 20 }}>- John Smith Tampa FL</Text>
                            </View> */}
                            <Pressable
                                style={[styles.buttonM, styles.buttonCloseM]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Spinner
                    visible={loading}
                    textContent={'Logging In.Please Wait...'}
                    textStyle={{ color: '#FFF'}}
                />
                <SnackBar visible={snackbar} 
                    bottom={10}
                    containerStyle={{ width:'90%',marginHorizontal:20,borderRadius:10 }}
                    autoHidingTime={0}
                    textMessage={snackbarText}
                    actionHandler={() => onDismissSnackBar()}
                    actionText="OK" 
                    accentColor='#ff9933' />
                    <View style={styles.head}>
                        <View style={{alignItems:'center',marginVertical:30}}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={{ width: 220, height: 95 }}
                            />
                            {/* <Text style={{ color: '#54585A',fontSize:20}}>ORM Optimizer</Text> */}
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.headText}>Welcome,</Text>
                            <Text style={styles.headText}>Login Now.</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.email}>
                            <MailIcon/>
                            <TextInput 
                                defaultValue={email}
                                style={{ paddingHorizontal: 5, width: '75%'}}
                                placeholder='Email'
                                onChangeText={(e) => setEmail(e)}>
                            </TextInput>
                        </View>
                        <View style={styles.password}>
                            <LockIcon/>
                            <TextInput
                                defaultValue={password}
                                style={{ paddingHorizontal: 5,width:'75%' }}
                                placeholder='Password'
                                secureTextEntry={EyeIcon ? false : true}
                                onChangeText={(e) => setPassword(e)}>
                            </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen/> : <EyeSlash/>}
                        </TouchableOpacity>
                        </View>
                    <TouchableOpacity>
                    <Text style={{ marginVertical: 20, color:'#8366A2',fontSize: 15 }}>Forgot Password?</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                        <Text style={{color:'white',fontSize: 20 }}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: '#8366A2', fontSize: 15 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    head:{
        width:'100%',
        height:'40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headText:{
        color: 'white',
        fontSize:30,
    },
    card: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: '60%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:40
    },
    email:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width:'70%',
        height:60,
        // borderWidth: 0.5,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    password:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width:'70%',
        height: 60,
        // borderWidth:0.5,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    button:{
        width:'85%',
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        backgroundColor:'#4169E1',
        marginVertical:20
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
})