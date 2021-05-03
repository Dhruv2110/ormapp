import React , { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView} from 'react-native'

import Footer from '../components/Footer'
// import CardNotif from '../components/cards/CardNotif'
import NewIcon from '../components/Icons/New'
import DeleteIcon from '../components/Icons/Delete'
import { FacebookIcon, LinkedInIcon, MediumIcon, PinterestIcon, TwitterIcon, WebsiteIcon, YoutubeIcon } from '../components/Icons/SocialIcons'

// import json from './data.json'
import * as Connection from '../api/connections'



export default function Notfications() {

    const [data,setData] = useState([])
    
    var json = []
    useEffect(() => {
         
        async function fetchConnections() {
            let connections = await Connection.getConnections()
            
            const { twitter, facebook, linkedin, pinterest, website, youtube, medium, crunchbase } = connections
            var i = 0
            if (twitter.URL)
            {
                
                var link = twitter
                var title = "twitter"
                var icon = "TW"
                var result = createJSON(link, icon, title,i)
                if (result)
                {
                    i += 1
                }

            }
            if (facebook.URL) {
                
                var link = facebook
                var title = "facebook"
                var icon = "FB"
                var result = createJSON(link, icon,title,i)
                if (result) {
                    i += 1
                }
            }
            if (linkedin.URL) {
                var link = linkedin
                var title = "linkedin"
                var icon = "LI"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            if (pinterest.URL) {
                var link = pinterest
                var title = "pinterest"
                var icon = "PI"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            if (website.URL) {
                var link = website
                var title = "website"
                var icon = "WB"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            if (youtube.URL) {
                var link = youtube
                var title = "youtube"
                var icon = "YT"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            if (medium.URL) {
                var link = medium
                var title = "medium"
                var icon = "MD"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            if (crunchbase.URL) {
                var link = crunchbase
                var title = "crunchbase"
                var icon = "CB"
                var result = createJSON(link, icon, title,i)
                if (result) {
                    i += 1
                }
            }
            //console.log(json)
            setData(json)
            console.log("data:",data)
        }
        fetchConnections()
        // setData(json)
        // console.log("data:",data)

    }, []);

    const createJSON = (link, icon, title,i) => {
        var text = setMsg(link)
        
        if (text != "") {
            return json[i] = {
                id:i,
                url: link.URL,
                icon: icon,
                msg: text
            }
        }
        else { return 0 }
    }

    const setMsg = (link) => {
        var msg = ""
        const {useHttps, hasTitle, hasMetaDesc, hasCanTag } = link
        if (!useHttps) { msg += "Enable HTTPS." }
        if (!hasTitle) { msg += "Add title." }
        if (!hasMetaDesc) { msg += "Add Meta Description." }
        if (!hasCanTag) { msg += "Add Canonical tag." }

        return msg
    }

    const getIcon = (text) => {
        switch (text)
        {
            case "TW":
                return <TwitterIcon />
            case "FB":
                return <FacebookIcon />
            case "LI":
                return <LinkedInIcon />
            case "PI":
                return <PinterestIcon />
            case "WB":
                return <WebsiteIcon />
            case "YT":
                return <YoutubeIcon />
            case "MD":
                return <MediumIcon />
            case "CB":
                return <CrunchbaseIcon />

        }
    }

    const CardNotif = ({ icon, url ,msg}) => {
        return (
            <View style={styles.textBox}>
                {getIcon(icon)}
                <View style={styles.col}>
                    <Text style={{ fontWeight: 'bold' }}>{url}</Text>
                    <Text>{msg}</Text>
                    {/* <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <NewIcon />
                        <Text style={{ fontSize: 12, margin: 7 }}>2 days ago</Text>
                    </View> */}
                    
                </View>
                
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <CardNotif icon={item.icon} url={item.url} msg={item.msg}/>
    );

    return (
        <>
        <View style={styles.container}>
            <View style={styles.card}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
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
        margin:10,
        width:'90%'
    }
})