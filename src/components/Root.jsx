import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '/Footer.png'

const Root = () => {
    return (
        <>
            <NavBar/>
            <div>
                <Outlet />
            </div>
            <footer>
                <img src={Footer} alt="" style={{ maxWidth: "100vw" }} />
            </footer>
        </>
    )
}

export default Root;