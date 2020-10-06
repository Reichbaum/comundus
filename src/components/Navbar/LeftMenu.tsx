import React, { FC} from 'react'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type LeftMenuType = {
  menuMode?: "horizontal" | "inline" | "vertical" | "vertical-left" | "vertical-right" | undefined
}

const LeftMenu: FC<LeftMenuType> = ({menuMode = 'horizontal'}) => {
    return (
      <Menu theme='dark' mode={menuMode}>
        <Menu.Item key="home">
          <a href="#">Startseite</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="#">Über uns</a>
        </Menu.Item>
        <Menu.Item key="trips">
          <a href="#">Unsere Reise</a>
        </Menu.Item>
        <SubMenu title={<span>Service</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#">Kontakt</a>
        </Menu.Item>
      </Menu>
    )

}

export default LeftMenu;