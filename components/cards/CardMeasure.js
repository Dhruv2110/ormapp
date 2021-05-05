import React,{useState} from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import SnackBar from 'react-native-snackbar-component'

export default function CardMeasure({keyword, bestPage,pos}) {
    // const [snackbar, setsnackbar] = useState(false)
    // const onDismissSnackBar = () => setsnackbar(false);
    var linkText = bestPage.slice(0,25) + '...'

    return (

    <View style={styles.innerCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>KEYWORD</Text>
                            </View>
                <Text style={{ marginTop: 15, marginLeft: 10 ,fontWeight:'bold'}}>{keyword}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
                <Text style={{ margin: 10, fontSize: 11 }}>BEST PAGE: <Text style={{fontSize: 15}}>{linkText}</Text></Text>
                
                {bestPage == '' ? 
                    <></> : <TouchableOpacity onPress={() => Linking.openURL(`${bestPage}`)}>
                    <View style={{ margin: 10 }}><Icon
                        name='external-link-alt'
                        type='font-awesome-5'
                        size={18}
                        color='#00B2FF' /></View>
                </TouchableOpacity>}
                        </View>
                        <View style={styles.stretch}>
                            <Text style={{ fontSize: 12 }}>POSITION: {pos}</Text>
                            <Text style={{ fontSize: 12 }}>CHANGE</Text>
                            <Text style={{ fontSize: 12 }}>PREV.POSITION</Text>
                        </View>
    </View>
    
    );
}

const styles = StyleSheet.create({
    innerCard: {
        backgroundColor: 'white',
        width: '95%',
        height: 130,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    tag: {
        backgroundColor: '#00B2FF',
        width: '24%',
        marginTop: 10,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },
    tagText: {
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginLeft: 0
    },
    stretch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    }
})
