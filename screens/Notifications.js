import React , { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView} from 'react-native'

import Footer from '../components/Footer'
// import CardNotif from '../components/cards/CardNotif'
import NewIcon from '../components/Icons/New'
import DeleteIcon from '../components/Icons/Delete'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon } from '../components/Icons/SocialIcons'


const DATA = [
    {
        id: 1,
        icon: <FacebookIcon />,
        text: "Facebook",
        url: "www.facebook.com/example"
    },
    {
        id: 2,
        icon: <TwitterIcon />,
        text: "Twitter",
        url: "www.twitter.com/example"
    },
    {
        id: 3,
        icon: <LinkedInIcon />,
        text: "Twitter",
        url: "www.linkedin.com/example"
    },
    {
        id: 4,
        icon: <PinterestIcon />,
        text: "Twitter",
        url: "www.pinterest.com/example"
    },
];


export default function Notfications() {

    const [data,setData] = useState(DATA)
    

    useEffect(() => {
    });


    const CardNotif = ({ icon, url }) => {
        return (
            <View style={styles.textBox}>
                    {icon}
                <View style={styles.col}>
                    <Text style={{ fontWeight: 'bold' }}>{url}</Text>
                    <Text>Add your tracked keyword "keyword 1" to your website homepage "Title tag" and "meta description"</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <NewIcon />
                        <Text style={{ fontSize: 12, margin: 7 }}>2 days ago</Text>
                        {/* <DeleteIcon /> */}
                    </View>
                    
                </View>
                
            </View>
        );
    }

    const renderItem = ({ item }) => (
        // <Item title={item.icon} />
        
        <CardNotif icon={item.icon} url={item.url} />
    );

    return (
        <>
        <View style={styles.container}>
            <View style={styles.card}>
                    <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>
                    {/* <CardNotifn={<TwitterIcon />} url={"www.twitter.com/example"} /> */}

                <View style={{position: 'relative',bottom:'0%'}}>
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
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    textBox: {
        flex: 1,
        backgroundColor: 'white',
        width: '96%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '50%',
        borderRadius: 15,
        margin:5,
        paddingHorizontal: 7,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    col:{
        margin:10
    }
})