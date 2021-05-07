import API from '../utils/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getConnections = async () => {
    return await API({
        method: 'GET',
        url: '/userRoutes/connection',
        headers: {
            authorization: 'Bearer ' + await AsyncStorage.getItem('@accessToken')
        }
    }).then((data) => { return data.data[0]}).catch(err => {console.error(err)})
}



export const saveConnections = async (connections) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/saveConnection',
        headers: {
            authorization: 'Bearer ' + await AsyncStorage.getItem('@accessToken')
        },
        data: connections
    })
    .then((result) => { return result.data })
}


export const emptyConnections = async (connections) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/emptyConnection',
        headers: {
            authorization: 'Bearer ' + await AsyncStorage.getItem('@accessToken')
        },
        data: connections
    })
    .then((result) => { return result.data })
}