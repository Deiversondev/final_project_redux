import React from 'react'
import notF from '../images/not_found.gif'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            <img className="notFound" src={notF} alt="" />
            <h1><Link to="/" >Go back to Home page</Link></h1>
        </div>
    )
}

export default NotFound