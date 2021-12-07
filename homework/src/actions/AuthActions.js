import api from "../api"

export const handleLogin = async(values,dispatch) =>{
    const {data} = await api.post('/auth',values)
    api.defaults.headers.common['Authorization'] = data
    if(data){
        console.log(data)
        localStorage.setItem('token',data)
        const logged = {
            type:'SET_LOGIN',
            token:data,
            auth:true,
            loading:false
        }
        dispatch(logged)
    }
}

export const handleLogout = (auth,dispatch) =>{
    if(auth){
        localStorage.removeItem('token')
        const loggedOut = {
            type:'SET_LOGOUT',
            token:'',
            auth:false,
            loading:false
        }
        dispatch(loggedOut)
        console.log(loggedOut.auth)
        console.log('test')
    }
}