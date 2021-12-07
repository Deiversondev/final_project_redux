import React from 'react'
import {useFormik} from 'formik';
import api from '../api';
import styles from './Form.module.css'
import axios from 'axios';




function Create() {

    const formik = useFormik({
        initialValues: {
            cep: '',
            cidade: '',
            complemento:'',
            estado:'',
            logradouro:'',
            number:0,
            pais:''
        }, onSubmit: async (values) =>{
            
            const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`)
                   values.cep = data.cep
                   values.cidade = data.localidade
                   values.estado = data.uf
                   values.logradouro = data.logradouro
                   values.complemento = data.complemento
                   values.number = data.number
                   console.log(data)
           
             
               
        }
    })

    return (
   
        <div>
         
         <h1>Endereço</h1>
         
                    <div className={styles.form}>
                     
                        <form onSubmit={formik.handleSubmit}>
                <div >

                    <div >
                        <h4 htmlFor="cep">CEP</h4>
                        <input type="text" name="cep" id="cep" placeholder="Digite seu cep" onChange={formik.handleChange} value={formik.values.cep} />
                        
                       
                    </div>
                    <div >
                        <h4 htmlFor="cidade">Cidade</h4>
                        <input type="text" name="cidade" type="text"id="cidade"  onChange={formik.handleChange} value={formik.values.cidade} />
                      
                    </div>
                    <div >
                        <h4 htmlFor="estado">Estado</h4>
                        <input type="text" name="estado" id="estado"  onChange={formik.handleChange} value={formik.values.estado} />
                      
                    </div>

                    <div >
                        <h4 htmlFor="logradouro">Logradouro</h4>
                        <input type="text" name="logradouro" id="logradouro" onChange={formik.handleChange} value={formik.values.logradouro} />
                        
                        
                    </div>

                    <div >
                        <h4 htmlFor="complemento">Complemento</h4>
                        <input type="text" name="complemento" id="complemento"  onChange={formik.handleChange} value={formik.values.complemento} />
                        
                        
                    </div>

                    <div >
                        <h4 htmlFor="number">Number</h4>
                        <input type="text" name="number" id="number"  onChange={formik.handleChange} value={formik.values.number} />
                        
                        
                    </div>

                    <div className={styles.btn}>
                        <button  type="submit">Pesquisar</button>
                      
                    </div>
                </div>
            </form>
                    </div>
              
  
        </div>
    )
}

export default Create
