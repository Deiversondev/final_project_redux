import api from '../api';

export const people = async(dispatch) =>{
    // const token = localStorage.getItem('token');
    //     api.defaults.headers.common['Authorization'] = token;
    const {data} = await api.get('/pessoa')
    if(data){
        console.log(data)
        dispatch(data)
    }
    else {
        console.log('oops')
    }
    
    
}