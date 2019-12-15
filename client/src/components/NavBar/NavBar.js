import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import "./NavStyle";


const NavBar = () => {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    const { activeItem } = this.state

    return (
        <Menu fluid widths={3}>

            <Menu.Item
                name='Menu'
                active={activeItem === 'buy'}
                onClick={this.handleItemClick}
            >
                <div className="menu-container">
                    <Icon name='food' size='big' />
                    <span>Menu</span>
                </div>
            </Menu.Item>

            <Menu.Item
                name='Service'
                active={activeItem === 'sell'}
                onClick={this.handleItemClick}
            >
                <div className="menu-container">
                    <Icon name='bell outline' size='big' />
                    <span>Service</span>
                </div>
            </Menu.Item>

            <Menu.Item
                name='My Order'
                active={activeItem === 'rent'}
                onClick={this.handleItemClick}
            >
                <div className="menu-container">
                    <Icon name='edit outline' size='big' />
                    <span>My Order</span>
                </div>
            </Menu.Item>

        </Menu >
    )
}
export default NavBar;