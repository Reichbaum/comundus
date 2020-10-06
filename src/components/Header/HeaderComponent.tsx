import React from 'react'
import './Header.less'

import Navbar from '../Navbar/Navbar'
import {ReactComponent as Logo} from '../../assets/img/Comundus_logo.svg'

const HeaderComponent = () => {
  return <div className='header__wrapper'>
    <a href='/'><Logo width={230} height={40} className='logo'/></a>
    <Navbar />
  </div>
}

export default HeaderComponent