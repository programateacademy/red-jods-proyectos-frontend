import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '/src/assets/img/Footer.png'
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext';


const Root = () => {

    //Using AuthContext information
    const { authData }=useContext(AuthContext);
    const { token, role }=authData;

    if (token) {
        return (
            <>
                <NavBar />
                <div>
                    <Outlet />
                </div>
                <footer>
                    <img src={Footer} alt="" style={{ maxWidth: "100vw" }} />
                </footer>
            </>
        )
    } else {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
}

export default Root;