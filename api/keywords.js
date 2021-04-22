import API from '../utils/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getKeywords = async () => {
    return await API({
        method: 'GET',
        url: '/userRoutes/keywords',
        headers: {

            authorization: 'Bearer ' + await AsyncStorage.getItem('@accessToken')
            
        }
    }).then((data) => { return data.data[0].keywords }).catch(err => { console.error(err) })
}

export const saveKeywords = async (keywords) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/saveKeywords',
        headers: {
            authorization: 'Bearer ' +  await AsyncStorage.getItem('@accessToken')
        },
        data:keywords
    })
}