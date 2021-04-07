import React, { useState} from 'react';

import { View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native'

import { MailIcon, LockIcon, EyeOpen, EyeSlash, UserIcon, UsersIcon } from '../components/Icons/LoginIcons'


export default SignUp = () => {

    const [EyeIcon,ChangeEye] = useState(true)


    return(
        <>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <View style={{alignItems:'center',marginVertical:40}}>
                            <Image
                                source={require('../assets/logo_only.png')}
                                style={{ width: 40, height: 40 }}
                            />
                            <Text style={{ color: '#54585A',fontSize:20}}>ORM Optimizer</Text>
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
                            <TextInput 
                            style={{ paddingHorizontal: 5, width: '75%'}}
                                placeholder='Company or Individual'>
                            </TextInput>
                        </View>
                        <View style={styles.password}>
                            <LockIcon/>
                            <TextInput
                                style={{ paddingHorizontal: 13,width:'75%' }}
                                placeholder='Password'>
                            </TextInput>
                        {/* <TouchableOpacity onPress={ChangeEye(!EyeIcon)}>
                            {EyeIcon ? <EyeOpen/> : <EyeSlash/> }
                        </TouchableOpacity> */}
                        <EyeOpen />
                        </View>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'white',fontSize: 20 }}>SIGNUP</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row',marginVertical:10}}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                        <Text style={{color: '#8366A2', fontSize: 15 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    head:{
        width:'100%',
        height:'30%',
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
        paddingHorizontal:14,
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

// export default SignUp;