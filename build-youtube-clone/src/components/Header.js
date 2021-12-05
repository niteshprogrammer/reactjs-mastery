import React from 'react';
import YoutubeLogo from '../Youtube-logo.svg';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';
import "./Header.css";
// ES7 Snippets Extension; -> rfce

// Material ui icons list; 
// https://mui.com/components/material-icons/

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar__menu">
          <div className="menu__ripple__effect"><MenuSharpIcon/></div>
        </div>
        <div className="location__transform">
          <img className="navbar__logo" src={YoutubeLogo} alt="Youtube Logo" />
          <sup className="navbar__location">IN</sup>
        </div>
      </div>
      <div className="navbar__search">
        <input className="search__input" type="text" name="search" id="search" placeholder="Search" />
          <SearchSharpIcon />
          <MicSharpIcon />
      </div>
        <div className="navbar__sidebar">
          <VideoCallSharpIcon />
          <AppsSharpIcon />
          <NotificationsNoneSharpIcon />
          <Avatar alt="User Profile" src="https://qphs.fs.quoracdn.net/main-thumb-584836856-50-cpjzltjdogyclzksubyajpmopjzbndus.jpeg" />
        </div>
    </div>
  )
}

export default Header;
