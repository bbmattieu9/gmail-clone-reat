import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import React from 'react';
import './Header.css';

function Header() {
    return <div className='header'>
            
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://cdn.vox-cdn.com/thumbor/ttJ6TTVOWTTi2p3EaeeLfS4fUS8=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" alt=""/>
            </div>

            <div className="header__middle">
            <IconButton>
                <SearchIcon />
            </IconButton>
                <input type='text' placeholder='Search mail' />
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
}

export default Header
