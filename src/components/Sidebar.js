import React from 'react'
import './Sidebar.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Sidebar
