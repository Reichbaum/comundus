import React, {useState} from 'react'
import {Button, Drawer} from 'antd'
import NavbarMenu from './NavbarMenu'
import './Navbar.less'
import {MenuOutlined} from '@ant-design/icons/lib'


const NavbarDrawer = () => {

  let [visible, setVisible] = useState(false)
  let [visibleSubmenu, setVisibleSubmenu] = useState(true)

  const showDrawer = () => {
    setVisible(true)
    setVisibleSubmenu(true)
  }

  const onClose = () => {
    setVisible(false)
    setVisibleSubmenu(false)
  }

  return (
    <div className="navbar__drawer">
      <Button className="navbar__toggle" onClick={showDrawer}>
        <MenuOutlined style={{fontSize: '24px', color: '#08c'}}/>
      </Button>
      <Drawer
        title="Menu"
        placement="top"
        onClose={onClose}
        visible={visible}
      >
        <NavbarMenu menuMode='inline'
                    defaultOpenKeys={["service"]}
                    visibleSubmenu={visibleSubmenu}
        />
      </Drawer>
    </div>
  )

}
export default NavbarDrawer