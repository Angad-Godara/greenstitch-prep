import React from 'react'
import Dashboard from './Dashboard'
import Pages from './Pages'
import './Sidebar.css'
import SideFooter from './SideFooter'

function Sidebar() {
    return (
        <aside className='sidebar__wrapper'>
            <img src='/assets/logo.jpg' alt='logo' />
            <div>
                <Dashboard />
                <Pages />
            </div>
            <SideFooter />
        </aside>
    )
}

export default Sidebar