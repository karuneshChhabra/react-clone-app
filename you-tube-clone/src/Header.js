

import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img className="image_icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                />
            </div>
            <div className="header__input">

  <input placeholder="search...."/>
  <SearchIcon className="header__input__button"/>
  </div>

  <div className="header__right">
      
      <VideoCallIcon className="header__icon"/>
      <NotificationsIcon className="header__icon"/>
      </div>
            
        </div>
    )
}

export default Header
