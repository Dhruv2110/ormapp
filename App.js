import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native'

import SignUp from './screens/SignUp'
import HomeScreen from './HomeScreen'

import { MailIcon, LockIcon,EyeOpen,EyeSlash } from './components/Icons/LoginIcons'

const Login = ({navigation}) => {

    const [EyeIcon,ChangeEye] = useState(false)

    const renderEye = () => {
        if (EyeIcon){
            return <EyeIcon />
        }
        else{
            return <EyeSlash />
        }
    }

    return(
        <>
                <View style={styles.container}>
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
                            style={{ paddingHorizontal: 5, width: '75%'}}
                                placeholder='Email'>
                            </TextInput>
                        </View>
                        <View style={styles.password}>
                            <LockIcon/>
                            <TextInput
                                style={{ paddingHorizontal: 5,width:'75%' }}
                                placeholder='Password'
                            secureTextEntry={EyeIcon ? false : true}>
                            </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen/> : <EyeSlash/>}
                        </TouchableOpacity>
                        </View>
                    <TouchableOpacity>
                    <Text style={{ marginVertical: 20, color:'#8366A2',fontSize: 15 }}>Forgot Password?</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')} >
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
        shadowOffset: { height: 0, width: 0 }, // IOS
        shadowOpacity: 2, // IOS
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
        shadowOffset: { height: 0, width: 0 }, // IOS
        shadowOpacity: 2, // IOS
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
    }
})