import React, {FC, useEffect, useState} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import SubMenu from 'antd/es/menu/SubMenu'

type MenuType = {
  menuMode?: "horizontal" | "inline" | "vertical" | "vertical-left" | "vertical-right" | undefined
  visibleSubmenu?: boolean
  defaultOpenKeys?: Array<string>
}

const NavbarMenu: FC<MenuType> = ({
                                    defaultOpenKeys,
                                    visibleSubmenu = true,
                                    menuMode = 'horizontal'}) => {

  const [classSubmenu, setClassSubmenu] = useState('');
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  useEffect(() => {
    if (!visibleSubmenu) {
      setClassSubmenu('hide');
    } else setClassSubmenu('');
  }, [visibleSubmenu]);


  return (
      <Menu
        theme='dark'
        mode={menuMode}
        selectedKeys={[current]}
        onClick={handleClick}
      >
       <Menu.Item key="home">
         <Link to="/">Startseite</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/ueber_uns">Über uns</Link>
        </Menu.Item>
        <Menu.Item key="trips">
          <Link to="/reisen">Unsere Reise</Link>
        </Menu.Item>
        <SubMenu
          key="service"
          title={<span>Service</span>}
          className={classSubmenu}>
          <Menu.Item key="setting:1"><Link to="/kontakt">Kontakte</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link to="/impressum">Impressum</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link to="/datenschutz">Datenschutz</Link></Menu.Item>
          <Menu.Item key="setting:4">Feedback</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

export default NavbarMenu;