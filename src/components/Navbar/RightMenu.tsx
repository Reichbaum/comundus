import React, {FC} from 'react'
import {Menu} from 'antd'

const SubMenu = Menu.SubMenu

type RightMenuType = {
  menuMode?: 'horizontal' | 'inline' | 'vertical' | 'vertical-left' | 'vertical-right' | undefined
}

const RightMenu: FC<RightMenuType> = ({menuMode = 'horizontal'}) => {
  return (
    <Menu theme='dark' mode={menuMode}>
      <SubMenu title={<span>Service</span>}>
        <Menu.Item key="setting:1"><a href="/kontakt">Kontakte</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/impressum">Impressum</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/datenschutz">Datenschutz</a></Menu.Item>
        <Menu.Item key="setting:4">Feedback</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default RightMenu