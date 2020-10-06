import React, {FC} from 'react'
import {Menu} from 'antd'

type LeftMenuType = {
  menuMode?: "horizontal" | "inline" | "vertical" | "vertical-left" | "vertical-right" | undefined
}

const LeftMenu: FC<LeftMenuType> = ({menuMode = 'horizontal'}) => {
    return (
      <Menu theme='dark' mode={menuMode}>
       <Menu.Item key="home">
          <a href="/">Startseite</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/ueber_uns">Über uns</a>
        </Menu.Item>
        <Menu.Item key="trips">
          <a href="/reisen">Unsere Reise</a>
        </Menu.Item>
      </Menu>
    )
}

export default LeftMenu;