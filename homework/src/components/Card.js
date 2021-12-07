import moment from "moment";
import styles from './Card.module.css'
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBin2Line} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {BsCalendarDate} from  'react-icons/bs'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {TiBusinessCard} from 'react-icons/ti'
import {BsHouseDoor} from 'react-icons/bs'


function Card({dispatch,erase,editPerson,person,goToPage}) {
    return (
        <div className={styles.cards_container}>
            {
                person && person.map(p => (
                    <div className={styles.card}>
                         <div className={styles.card_user_icon}>
                         <h3 className={styles.userIcon}>
                        <FaUserCircle/>
                        </h3>
                         </div>
                      
                        <div className={styles.card_content}>
                            <h3>{p.nome}</h3>
                            <p><span><BsCalendarDate/> Data de Nascimento: </span>{moment(p.dataNascimento).format('DD/MM/YYYY')}</p>
                            <p><span><MdOutlineAlternateEmail/> Email: </span>{p.email}</p>
                            <p><span><TiBusinessCard/> CPF: </span>{p.cpf}</p>
                        </div>
                      <div className={styles.card_btns}>
                      <button onClick={() => {editPerson(dispatch,p.idPessoa);goToPage()}}>Editar <FiEdit/></button>
                        <button onClick={() =>erase(p.idPessoa)}>Excluir <RiDeleteBin2Line/></button>
                      </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
