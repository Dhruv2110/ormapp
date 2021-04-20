import API from '../utils/api'

export const getKeywords = async () => {
    return await API({
        method: 'GET',
        url: '/userRoutes/keywords',
        headers: {
            authorization : localStorage.getItem('accessToken')
        }
    }).then((data) => { return data.data[0].keywords }).catch(err => { console.error(err) })
}

export const saveKeywords = async (keywords) => {
    return await API({
        method: 'POST',
        url: '/userRoutes/saveKeywords',
        headers: {
            authorization : localStorage.getItem('accessToken')
        },
        data:keywords
    })
}