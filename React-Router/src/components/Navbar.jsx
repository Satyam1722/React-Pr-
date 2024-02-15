import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </nav>
    </div>
  )
}

export default Navbar