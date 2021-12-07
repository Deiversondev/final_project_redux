import api from '../../api'

const EditPerson = async (dispatch,id) => {
     const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)

    dispatch({
        type:'EDIT_PERSON',
        data
    })
}

export default EditPerson