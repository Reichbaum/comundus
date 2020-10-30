import React from 'react'
import NavbarMenu from './NavbarMenu'
import './Navbar.less'
import {ReactComponent as Logo} from '../../assets/img/Comundus_logo.svg'
import NavbarDrawer from './NavbarDrawer'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <a className="navbar__logo" href="/">
          <Logo width={219} height={45}/>
        </a>
        <div className="navbar__menu">
          <NavbarMenu/>
        </div>
        <NavbarDrawer/>
      </nav>
    </div>
  )
}

export default Navbar