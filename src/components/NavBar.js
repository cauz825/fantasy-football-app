import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Top Stories' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item
          name='Top Stories'
          active={activeItem === 'Top Stories'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Team News'
          active={activeItem === 'Team News'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Player News'
          active={activeItem === 'Player News'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}