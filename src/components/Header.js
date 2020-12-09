import React from 'react'
import './style.css'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      {props.location.pathname.includes('/albums') ?
      <h1>Please Buy SOMETHING</h1> : <h1>ANDREW'S MUSIC EMPORIUM</h1>}
      <nav className="nav-list">
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/about'>
            <li>About</li>
          </Link>

          <Link to='/albums'>
            <li>Albums</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
export default withRouter(Header)
