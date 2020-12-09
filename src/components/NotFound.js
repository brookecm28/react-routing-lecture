import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = ((props) => {
    return (
    <div>
        <h1>We couldn't find the page you're looking for :/</h1>
        <Link to='/albums'>Check out some albums?</Link>
    </div>
    )
})

export default NotFound