import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import { LocalHospital, EmojiFlags, People, Chat, Storefront, VideoLibrary, ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './Stateprovider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar__left">
            <SidebarRow 
            title= {user.displayName} 
            src= {user.photoURL}
            />
            
            
            <SidebarRow title='Covid-19 Inoformation Center' Icon={LocalHospital} />
            <SidebarRow title='pages' Icon={EmojiFlags} />
            <SidebarRow title='friends' Icon={People} />
            <SidebarRow title='messenger' Icon={Chat} />
            <SidebarRow title='marketplace' Icon={Storefront} />
            <SidebarRow title='video' Icon={VideoLibrary} />
            <SidebarRow title='marketplace' Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
