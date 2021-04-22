import API from '../utils/api'

 
export const login = async (credentials) => {

    return await API({
        method: 'POST',
        url: '/auth/login',
        data: credentials
    })
    
}


export const signup = async (credentials) => {
    return await API({
        method: 'POST',
        url: '/auth/signup',
        data: credentials
    })     
}


export const getUser = async () => {
    let user = localStorage.getItem('user');

    if(user)  {
        return JSON.parse(user)
    }

    return {}
} 

export const tokenRefesh = ( refreshToken) => {
    
    return new Promise((resolve,reject) => {
        API({
            method: 'POST',
            url: '/auth/token',
            data: { token: refreshToken }
        })
        .then((response) => {
            localStorage.setItem('accessToken', 'Bearer '+ response.data.accessToken) 
            return resolve({status: 200})
        })
        .catch(err => {
            console.log(err)      
            return resolve({status: 400})
        })
    })
       
}


export const checkAuthentication = async() => {
    let accessToken = localStorage.getItem('accessToken')
    let refreshToken = localStorage.getItem('refreshToken')
    let user = localStorage.getItem('user')

    return await new Promise((resolve,reject) => {
        if(accessToken && refreshToken && user) {
        
            API({
                method: 'POST',
                url: '/auth/check-token',
                data: {token: accessToken}
            })
            .then((response) => {
                return resolve({status: 200})
    
            })
            .catch( (err) => {
                console.log(err)
                if(err.response.data.msg === 'expired') {
                    console.log('expired')
                    return resolve({status: 301})
                } else {
                    return resolve({status: 400})
                }
    
            
            })
        } else {
            return resolve({status: 400})
        } 
    }) 
    
}


export const logout = () => {
    let refreshToken = localStorage.getItem('refreshToken');
    localStorage.clear();

    return API({
        method: 'POST',
        url: '/auth/logout',
        data: {refreshToken: refreshToken}
    })   
}






