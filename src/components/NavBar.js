import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function NavBar() {
    return(
        <Menu>
                <Menu.Item
                    name='Top'
                    className='Top'
                    />
                <Menu.Item
                    name='Team News'
                    className='Teams'
                    />
                <Menu.Item
                    name='Player News'
                    className="Players"
                    />
        </Menu>
    )
} 

export default NavBar;
