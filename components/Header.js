import React from 'react';
import { StyleSheet, Text,View, Image,TouchableOpacity } from 'react-native';

import Menu, { MenuItem } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';


export default function App() {
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
            style={{padding:5}}//Menu Style
        >
          <MenuItem onPress={hideMenu}>Notfication</MenuItem>
          <MenuItem onPress={hideMenu}>ORM Performance</MenuItem>
        </Menu>
      </View>
            
        </View>
    );
}

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