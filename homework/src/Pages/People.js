import React, { useEffect } from 'react'
import api from '../api';
import { connect } from 'react-redux'
import GetPerson from '../store/actions/GetPerson';
import EditPerson from '../store/actions/Edit';
import { useNavigate } from 'react-router';
import Card from '../components/Card';

function People({person,dispatch}) {

const navigate = useNavigate()

   useEffect(() =>{
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = token;
    GetPerson(dispatch)
   },[])

    function goToPage(){
    setTimeout(() =>{
        navigate('/form')
    },300)
   }
   
   async function erase(id){
    await api.delete(`/pessoa/${id}`)
    GetPerson(dispatch)
   }

//    async function getUser (id){
//         const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
//         console.log(data)
//    }

   console.log(person)


    return (
        <div>

            <h1>Pessoas</h1>
            {
               
                    <div>
                        <Card goToPage={goToPage}
                        editPerson={EditPerson}
                        dispatch={dispatch} 
                        erase={erase}
                        person={person}/>
                    </div>
                
            }
         
        </div>
    )
}



const mapStateToProps = state => ({
    person: state.PeopleReducer.person
  })
  
  export default connect(mapStateToProps)(People)