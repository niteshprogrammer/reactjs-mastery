import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow.js';

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscriptions" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SidebarRow Icon={HistorySharpIcon} title="History" />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltSharpIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreSharpIcon} title="Show More" />
    </div>
  )
}

export default Sidebar;
