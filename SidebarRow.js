import React from 'react'
import {Avatar} from '@material-ui/core';
import './sidebarRow.css'


function SidebarRow({src, Icon, title}) {
    // const {title} = props
    return (
        <div className="sidebar__singleRow">
         
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
        
          
            <h4>{title}</h4>
           
        </div>
    )
}

export default SidebarRow
