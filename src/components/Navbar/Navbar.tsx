import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import './Menu.less'
import {ReactComponent as Logo} from '../../assets/img/Comundus_logo.svg'


class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href=""><Logo width={200} height={40}/></a>
        </div>

          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu menuMode='inline'/>
            <RightMenu menuMode='inline'/>
          </Drawer>

      </nav>
    );
  }
}
export default Navbar;