import React, { useState  } from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [inputField, setInputField] = useState("");




  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="image_icon"
            alt="youTube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </Link>
      </div>

      <div className="header__input">
      
          <input
            placeholder="Search...."
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
          <Link to={`/search/${inputField}`} type="submit">
            <SearchIcon className="header__input__button" />
          </Link>
        
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
