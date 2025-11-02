import React from 'react'
import MenuList from './MenuList'

const TreeViewMenu = ({ menus = [] }) => {

    return (
        <div className='tree-view-container'>

        <MenuList list={menus} />
        </div>
    )
}

export default TreeViewMenu