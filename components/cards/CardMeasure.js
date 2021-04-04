import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function CardMeasure() {
    return (
    <View style={styles.innerCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>KEYWORD</Text>
                            </View>
                            <Text style={{ marginTop: 15, marginLeft: 10 }}>John Smith Tampa FL</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
                            <Text style={{ margin: 10, fontSize: 13 }}>BEST PAGE: /blog/an-intro-to-rank-traking</Text>
                            <View style={{ margin: 10 }}><Icon
                                name='external-link-alt'
                                type='font-awesome-5'
                                size={18}
                                color='#00B2FF' /></View>
                        </View>
                        <View style={styles.stretch}>
                            <Text style={{ fontSize: 12 }}>POSITION</Text>
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
