import React , { useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native'

import Footer from '../components/Footer'

import NewIcon from '../components/Icons/New'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon } from '../components/Icons/SocialIcons'




export default function Notfications() {

    useEffect(() => {
        hideMenu();
    });


    return (
        <>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textBox}>
                        <FacebookIcon />
                        <View style={styles.col}>
                            <Text style={{ fontWeight: 'bold' }}>www.facebook.com/example</Text>
                            <Text>Add your tracked keyword "keyword 1" to your website homepage "Title tag" and "meta description"</Text>
                            <View style={{ flexDirection:'row' ,marginVertical:5}}>
                                <NewIcon/>
                                <Text style={{ fontSize:12,margin:7}}>2 days ago</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.textBox}>
                        <TwitterIcon />
                        <View style={styles.col}>
                            <Text style={{ fontWeight: 'bold' }}>www.twitter.com/example</Text>
                            <Text>Your twitter URL moved up 5 positions for "Keyword 1"</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                
                                <Text style={{ fontSize: 12, margin: 7 }}>2 days ago</Text>
                            </View>
                        </View>
                    </View>
                <View style={{position: 'relative',bottom:'-30%'}}>
                    <Footer />
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
    card: {
        marginTop: 10,
        backgroundColor: '#D1D1D1',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        padding: 20,
    },
    textBox: {
        backgroundColor: 'white',
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '20%',
        borderRadius: 15,
        marginBottom: 12,
        paddingVertical: 10,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 0, width: 0 }, // IOS
        shadowOpacity: 2, // IOS
        shadowRadius: 1, //IOS
    },
    col:{
        margin:10
    }
})