import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { handleLogout } from '../actions/AuthActions';
import styles from './Header.module.css'
import logo from '../images/logo.jpg'
function Header({auth,dispatch}) {
    return (
        <div>
            <nav>
                <img className={styles.logo} src={logo} alt="" />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {
                        !auth.auth && <li><Link to='/login'>Login</Link></li> 
                    }
                     {
                         auth.auth && (
                             <>
                             <li><Link to='/people'>Pessoas</Link></li>
                             <li><Link to='/create'>Cadastrar</Link></li>
                             <li><Link to='/address'>Endereço</Link></li>
                            <button className={styles.logOutBtn} onClick={() => handleLogout(auth,dispatch)}>LogOut</button> 
                              </>
                         )
                     }
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
})


export default   connect(mapStateToProps)(Header);
