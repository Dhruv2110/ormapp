import API from '../utils/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSerpData = async (keyword) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/serp',
        headers: {
            authorization: 'Bearer ' + await AsyncStorage.getItem('@accessToken')
        },
        data: keyword
    }).then((data) => { return data }).catch(err => { console.error(err) })
}
