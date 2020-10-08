import React from 'react'
import NavbarMenu from './NavbarMenu'
import './Navbar.less'
import {ReactComponent as Logo} from '../../assets/img/Comundus_logo.svg'
import NavbarDrawer from './NavbarDrawer'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/"><Logo width={200} height={40}/></a>
        </div>
        <div className="navbar__menu">
          <NavbarMenu defaultOpenKeys={['service']}/>
        </div>
        <NavbarDrawer/>
      </nav>
    </div>
  )
}

export default Navbar