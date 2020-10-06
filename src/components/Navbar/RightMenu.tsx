import React, {Component, FC} from 'react'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type RightMenuType = {
  menuMode?: "horizontal" | "inline" | "vertical" | "vertical-left" | "vertical-right" | undefined
}

const RightMenu: FC<RightMenuType> = ({menuMode = 'horizontal'}) => {
    return (
      <Menu theme='dark' mode={menuMode}>
        <Menu.Item key="phone">
          <a href="">Rückruf</a>
        </Menu.Item>
      </Menu>
    )
}

export default RightMenu;