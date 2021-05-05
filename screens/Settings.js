import React, { useState,useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
//simport { Checkbox } from 'react-native-paper';
import CheckBox from 'react-native-check-box'


import Footer from '../components/Footer'

export default function Settings(navigation) {
    const [isSelectedD, setSelectionD] = useState(false);
    const [isSelectedW, setSelectionW] = useState(false);

    const [isFocusU,setFocusU] = useState(false);
    const [isFocusE,setFocusE] = useState(false);
    const [isFocusF,setFocusF] = useState(false);
    const [isFocusL,setFocusL] = useState(false);

    // useEffect(
    //     () =>
    //         navigation.addListener('beforeRemove', (e) => {

    //             // Prevent default behavior of leaving the screen
    //             e.preventDefault();

    //         }),
    //     [navigation]
    // );

    const FocusU = () => {
        setFocusU(true);
        setFocusE(false);
        setFocusF(false);
        setFocusL(false);
    }
    const FocusE = () => {
        setFocusU(false);
        setFocusE(true);
        setFocusF(false);
        setFocusL(false);
    }
    const FocusF = () => {
        setFocusU(false);
        setFocusE(false);
        setFocusF(true);
        setFocusL(false);
    }
    const FocusL = () => {
        setFocusU(false);
        setFocusE(false);
        setFocusF(false);
        setFocusL(true);
    }


    return (
        <>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>My Acoount</Text>
                    <View style={styles.accountCard}>
                            <View style={{}}>
                                <TextInput 
                                    onFocus={FocusU}
                                    style={ isFocusU ? styles.focusStyle : styles.blurStyle }
                                    placeholder="Username">
                                     </TextInput>
                                <TextInput 
                                    onFocus={FocusE}
                                    style={isFocusE ? styles.focusStyle : styles.blurStyle}
                                    placeholder="Email Address"></TextInput>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <TextInput 
                                    onFocus={FocusF}
                                    style={[isFocusF ? styles.focusStyle : styles.blurStyle,
                                        {width: '45%'}
                                    ]}
                                    placeholder="First Name"></TextInput>
                                <TextInput 
                                    onFocus={FocusL}
                                    style={[isFocusL ? styles.focusStyle : styles.blurStyle,
                                    { width: '45%' }
                                    ]}
                                    placeholder="Last Name"></TextInput>
                            </View>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
                    <View style={styles.notifications}>
                        <View style={{flexDirection: 'row'}}>
                                <CheckBox
                                    style={{padding: 1 }}
                                    onClick={() => {
                                        setSelectionD(!isSelectedD)
                                    }}
                                    isChecked={isSelectedD}
                                    checkBoxColor='#005CC8'
                                    uncheckedCheckBoxColor='#b3b3b3'
                                />
                            <Text style={{marginTop:5}}>Daily Website Performance Insights.</Text>
                        </View>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    style={{ padding: 1 }}
                                    onClick={() => {
                                        setSelectionW(!isSelectedW)
                                    }}
                                    isChecked={!isSelectedW}
                                    checkBoxColor='#005CC8'
                                    uncheckedCheckBoxColor='#b3b3b3'
                                />
                                <Text style={{ marginTop: 5 }}>Weekly On-Page Recommendation.</Text>
                            </View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Delete Account</Text>
                    <View style={styles.delete}>
                        
                            <Text>Permanently delete your account and all of your content.</Text>
                            <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={{ color: '#B2B2FF'}}>DELETE ACCOUNT</Text>
                            </View>
                            </TouchableOpacity>
                    </View>
            <Footer />
                </View>
            </View>
            </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    card: {
        marginTop: 10,
        backgroundColor: '#D1D1D1',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
    accountCard: {
        marginVertical:20,
        backgroundColor:'white',
        width:'100%',
        height: 150,
        borderRadius:15,
        paddingVertical:5,
        paddingHorizontal:15,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    focusStyle:{
        borderBottomWidth:1,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        height: 40, marginBottom: 7, padding: 5
    },
    blurStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#B2B2FF',
        height: 40, marginBottom: 7, padding: 5
    },
    notifications: {
        marginVertical: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 100,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    delete:{
        marginVertical: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 120,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    button: {
        marginVertical:10,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#7F7FFF',
        padding:5,
        borderRadius:20
    }
})