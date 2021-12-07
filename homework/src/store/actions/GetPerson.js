import api from '../../api'

const GetPerson = async (dispatch) => {
    const {data} = await api.get('/pessoa')

    dispatch({
        type:'SET_PEOPLE',
        data
    })
}

export default GetPerson