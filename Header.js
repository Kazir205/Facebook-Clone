import React from 'react'
import './header.css';
import { Search, Home, Flag, Add , Forum, NotificationsActive,ExpandMore, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle } from '@material-ui/icons';
import {Avatar, IconButton} from '@material-ui/core';
import { useStateValue } from './Stateprovider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png" alt="" />
                
                <div className="header__input">
                <Search/>
                <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <Home fontSize='large'/>
                </div>
                <div className="header__option">
                    <Flag fontsize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontsize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontsize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontsize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                <Add/>
                </IconButton>
                <IconButton>
                <Forum/>
                </IconButton>
                <IconButton>
                <NotificationsActive/>
                </IconButton>
                <IconButton>
                <ExpandMore/>
                </IconButton>

            </div>
        </div>
    )
}


export default Header
