
import { useFormik} from 'formik'
import styles from './Form.module.css'
import {connect} from 'react-redux'
import { handleLogin } from '../actions/AuthActions'
import { useNavigate } from 'react-router'

function Login({auth,dispatch}) {

    const navigate = useNavigate()


    console.log(auth)
    const formik = useFormik({
        initialValues: {
            usuario:'',
            senha:''
        }, onSubmit: async (values) =>{
               
                setTimeout(() =>{
                    navigate('/people')
                    window.location.reload()
                },1000)
                
            handleLogin(values,dispatch)
            
                formik.resetForm()
               
        }
    })

    return (
        <>
            <h1>Login</h1>
            <div className={styles.form}>
            <form onSubmit={formik.handleSubmit}>
                <div ></div>
                <div >

                    <div >
                        <h4 htmlFor="usuario">Nome</h4>
                        <input type="text" name="usuario" id="usuario" placeholder="Digite seu username" onChange={formik.handleChange} value={formik.values.usuario} />
                       
                    </div>

                    <div >
                        <h4 htmlFor="senha">Sobrenome</h4>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={formik.handleChange} value={formik.values.senha} />
                      
                    </div>

                    <div className={styles.btn}>
                        <button  type="submit"> Login </button>
                      
                    </div>
                </div>
            </form>

        </div> 
            
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
})


export default   connect(mapStateToProps) (Login);
