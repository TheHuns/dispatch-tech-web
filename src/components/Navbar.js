import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='col-md-3'>
            <nav className='nav flex-column'>
                <Link to='#'>Active Requests</Link>
                <Link to='#'>Techs on Duty</Link>
                <Link to='#'>Create Service Request</Link>
                <Link to='#'>Search Closed Services</Link>
                <Link to='#'>Logout</Link>
            </nav>
        </div>
    )
}
