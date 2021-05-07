import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DownIcon = () => {
    return (
        <View>
            <FontAwesome5 name="arrow-down" size={12} color="red" />
            {/* <AntDesign name="caretdown" size={12} color="red" /> */}
            {/* <Entypo name="arrow-down" size={15} color="red" /> */}
        </View>
    );
}

const UpIcon = () => {
    return (
        <View>
            {/* <AntDesign name="caretup" size={12} color="green" /> */}
            <FontAwesome5 name="arrow-up" size={12} color="green" />
            {/* <Entypo name="arrow-up" size={15} color="green" /> */}
        </View>
    );
}

const EqualIcon = () => {
    return (
        <View>
            <FontAwesome5 name="equals" size={12} color="#00B2FF" />
        </View>
    );
}


const styles = StyleSheet.create({

})


export {
    UpIcon, DownIcon, EqualIcon
}