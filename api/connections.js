import API from '../utils/api'


export const getConnections = async () => {
    return await API({
        method: 'GET',
        url: '/userRoutes/connection',
        headers: {
            authorization : localStorage.getItem('accessToken')
        }
    }).then((data) => { return data.data[0]}).catch(err => {console.error(err)})
}

export const saveConnections = async (connections) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/saveConnection',
        headers: {
            authorization : localStorage.getItem('accessToken')
        },
        data: connections
    }).then((result) => { return result.data })
}