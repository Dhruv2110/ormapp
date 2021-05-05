import React , { useEffect } from 'react';
import { StyleSheet, Text,View, Image,TouchableOpacity } from 'react-native';

// import { createStackNavigator } from '@react-navigation/stack';
import Menu, { MenuItem } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';

import * as Auth from '../api/auth';
// import Login from '../App'



const Header = ({ navigate }) => {

    useEffect(() => {
        hideMenu()
    });

    _menu = null;

    setMenuRef = ref => {
        _menu = ref;
    };

    hideMenu = () => {
        _menu.hide();
    };

    showMenu = () => {
        _menu.show();
    };

    const onPressNot = () => {
        hideMenu()
        navigate.navigate('Notifications')
    }

    const onPressLogOut = async () => {
        hideMenu()
        
        let result = await Auth.logout()
        console.log(result.status)
        if (result.status == 200){
            navigate.popToTop()
        }
        // navigate.navigate('Root', { screen: 'Login' });
    }

    return (
        <View style={styles.head}>
            <View style={{ width: 30, height: 40 }}></View>
            <Image
                source={require('../assets/logo_only.png')}
                style={{ width: 40, height: 40 }}
            />
            <View>
                <Menu
                    ref={setMenuRef}
                    button={<TouchableOpacity style={styles.dots} onPress={showMenu} >
                        <Entypo
                            name="dots-three-vertical"
                            size={24} color="white"
                        />
                    </TouchableOpacity>}
                    animationDuration={10}
                    style={{ padding: 2 }}//Menu Style
                >
                    <MenuItem onPress={onPressNot}>Notifications</MenuItem>
                    <MenuItem onPress={onPressLogOut}>Logout</MenuItem>
                </Menu>
            </View>

        </View>
    );
}
// const Stack = createStackNavigator();


export default Header

const styles = StyleSheet.create({
    head: {
        width: '100%',
        height: 80,
        paddingTop: 30,
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});