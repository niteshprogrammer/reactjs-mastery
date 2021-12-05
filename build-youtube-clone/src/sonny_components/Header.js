import React from 'react'
import Logo from "../YoutubeLogo.svg";
import "./Header.css";
import MenuSharpIcon from '@mui/icons-material/Menu';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header({onInputSearchSubmit}) {
  const handleInputSearch = (event) => { 
    onInputSearchSubmit(event.target.value);
  };
  return (
    <div className="header">
      <div className="header__left">
          <MenuSharpIcon />
          <Link to="/">
            <div className="header__location">
            <img src={Logo} alt="" className="header__logo" />
            <span className="header__locationText">IN</span>
            </div>
          </Link>
      </div>
      <div className="header__input">
        <input type="text" name="input" id="input" placeholder="Search" onChange={handleInputSearch} />
        <SearchSharpIcon className="header__searchButton" />
        <MicSharpIcon className="header__voiceSearch" />
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsNoneSharpIcon className="header__icon" />
        <Avatar alt="User Profile" src="https://qphs.fs.quoracdn.net/main-thumb-584836856-50-cpjzltjdogyclzksubyajpmopjzbndus.jpeg" />
      </div>
    </div>
  )
}

export default Header;
