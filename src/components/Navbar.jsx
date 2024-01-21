import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-evenly mt-5'>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='about'>ABOUT</Link>

        </li>
        <li>
          <Link to='contact'>CONTACT</Link>
        </li>
        <li>
          <Link to='product'>PRODUCT</Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar