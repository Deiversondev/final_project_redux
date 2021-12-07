import React, { useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import People from "./Pages/People";
import Edit from "./Pages/Edit";
import Create from "./Pages/Create";
import NotFound from './components/NotFound'
import Addresss from "./Pages/Address";


const Routers = ({auth,dispatch}) => {


    useEffect(() =>{
        if(localStorage.getItem('token')){
           
            const logged = {
                type:'SET_LOGIN',
                token: localStorage.getItem('token'),
                auth:true,
                loading:false
            }
        //    alert('logged')
            dispatch(logged)
        }
        
    },[])


   return  (
       <div>
           <BrowserRouter>
           <Header/>
                {
                    auth.auth ? (
                        <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/people' element={<People/>}></Route>
                        <Route path='/form' element={<Edit/>}></Route>
                        <Route path='/create' element={<Create/>}></Route>
                        <Route path='/address' element={<Addresss/>}></Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    ) : (
                        <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    )
                }
       </BrowserRouter>
       </div>
    )

}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
  })

export default connect(mapStateToProps)(Routers)