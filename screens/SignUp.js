import React, { useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { Picker } from '@react-native-picker/picker';

import { MailIcon, LockIcon, EyeOpen, EyeSlash, UserIcon, UsersIcon } from '../components/Icons/LoginIcons'

import HomeScreen from '../HomeScreen'

const SignUp = ({navigation}) => {

    const [EyeIcon,ChangeEye] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState();

    return(
        <>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <View style={{alignItems:'center',marginVertical:30}}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={{ width: 210, height: 90 }}
                            />
                            {/* <Text style={{ color: '#54585A',fontSize:20}}>ORM Optimizer</Text> */}
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.headText}>Create Account</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.email}>
                            <MailIcon/>
                            <TextInput 
                            style={{ paddingHorizontal: 10, width: '75%'}}
                                placeholder='Email'>
                            </TextInput>
                        </View>
                        <View style={styles.email}>
                        <UserIcon/>
                            <TextInput 
                            style={{ paddingHorizontal: 10, width: '75%'}}
                                placeholder='Full Name'>
                            </TextInput>
                        </View>
                        <View style={styles.email}>
                        <UsersIcon/>
                            {/* <TextInput 
                            style={{ paddingHorizontal: 5, width: '75%'}}
                                placeholder='Company or Individual'>
                            </TextInput> */}
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)}
                            style={{ backgroundColor:'black',width:500,height:50,color:'grey'}}>
                            <Picker.Item label="Select" value="0"/>
                            <Picker.Item label="Company" value="company" />
                            <Picker.Item label="Individual" value="individual" />
                        </Picker>
                        </View>
                        <View style={styles.password}>
                            <LockIcon/>
                            <TextInput
                                style={{ paddingHorizontal: 13,width:'75%' }}
                                placeholder='Password'
                            secureTextEntry={EyeIcon ? false : true}>
                            </TextInput>
                        <TouchableOpacity onPress={() => ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen /> : <EyeSlash />}
                        </TouchableOpacity>
                        </View>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={{color:'white',fontSize: 20 }}>SIGNUP</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row',marginVertical:10}}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.popToTop()}>
                        <Text style={{color: '#8366A2', fontSize: 15 }}>Login</Text>
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
        <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    head:{
        width:'100%',
        height:'35%',
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
        height: '70%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20
    },
    email:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width:'70%',
        height:60,
        // borderWidth: 0.5,
        marginVertical:10,
        paddingHorizontal:12,
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
        paddingHorizontal:14,
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
    }
})

// export default SignUp;