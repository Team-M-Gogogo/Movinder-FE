import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import logo from './image/logo.png'

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
					<a href="/"
					> <img src={logo} style={{ width: "103%" }} alt="Logo" /> </a>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<RightMenu />
					</div>

				</div>
			</nav>
		);
	}
}

export default Navbar;
