import React,{ useState } from 'react';
import { ScrollView, StyleSheet, Text, View,TextInput,CheckBox,TouchableOpacity} from 'react-native'

import Footer from '../components/Footer'

export default function Settings() {
    const [isSelected, setSelection] = useState(false);
    const [isFocusU,setFocusU] = useState(false);
    const [isFocusE,setFocusE] = useState(false);
    const [isFocusF,setFocusF] = useState(false);
    const [isFocusL,setFocusL] = useState(false);

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
                                    // onBlur={() => setFocus(false)}
                                style={{ 
                                    borderBottomWidth: isFocusU ? 1 : 1,
                                    borderWidth: isFocusU ? 1 : 0,
                                    borderColor: isFocusU ? 'black' : '#B2B2FF',
                                    borderRadius:  isFocusU  ? 10 : 0,
                                    borderBottomColor: isFocusU ? 'black' : '#B2B2FF',
                                    height:40,marginBottom:7,
                                    padding:5}} placeholder="Username"></TextInput>
                                <TextInput 
                                    onFocus={FocusE}
                                style={{ 
                                    borderBottomWidth: isFocusE ? 1 : 1,
                                    borderWidth: isFocusE ? 1 : 0,
                                    borderColor: isFocusE ? 'black' : '#B2B2FF',
                                    borderRadius: isFocusE ? 10 : 0,
                                    borderBottomColor: isFocusE ? 'black' : '#B2B2FF',
                                    height: 40, marginBottom: 7, padding: 5}} placeholder="Email Address"></TextInput>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <TextInput 
                                    onFocus={FocusF}
                                style={{ 
                                     borderBottomWidth: isFocusF ? 1 : 1,
                                    borderWidth: isFocusF ? 1 : 0,
                                    borderColor: isFocusF ? 'black' : '#B2B2FF',
                                    borderRadius: isFocusF ? 10 : 0,
                                    borderBottomColor: isFocusF ? 'black' : '#B2B2FF', 
                                    height: 40, width: '45%', marginBottom: 7, padding: 5}} placeholder="First Name"></TextInput>
                                <TextInput 
                                    onFocus={FocusL}
                                style={{ 
                                     borderBottomWidth: isFocusL ? 1 : 1,
                                    borderWidth: isFocusL ? 1 : 0,
                                    borderColor: isFocusL ? 'black' : '#B2B2FF',
                                    borderRadius: isFocusL ? 10 : 0,
                                    borderBottomColor: isFocusL ? 'black' : '#B2B2FF', 
                                    height: 40, width: '45%', marginBottom: 7, padding: 5}} placeholder="Last Name"></TextInput>
                            </View>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
                    <View style={styles.notifications}>
                        <View style={{flexDirection: 'row'}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}/>
                            <Text style={{marginTop:5}}>Daily Website Performance Insights</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <CheckBox 
                                value={isSelected}/>
                            <Text style={{ marginTop: 5 }}>Weekly On-Page Recommendations</Text>
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
                </View>
            </View>
            <Footer />
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
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        paddingVertical:5,
        paddingHorizontal:15
    },
    notifications: {
        marginVertical: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    delete:{
        marginVertical: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 120,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10
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