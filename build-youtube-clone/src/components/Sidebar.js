import React from 'react'

function Sidebar() {
  return (
    <div>
            <div className="sidebaricons">
      <div className="sidebar__icon">
        <HomeSharpIcon />
        <h2 className="sidebar__title">
          Home
        </h2>
      </div>
      <div className="sidebar__icon">
        <ExploreSharpIcon />
        <h2 className="sidebar__title">
          Explore
        </h2>
      </div>
      <div className="sidebar__icon">
        <SubscriptionsSharpIcon />
        <h2 className="sidebar__title">
          Subscriptions
        </h2>
      </div>
      <div className="sidebar__icon">
        <VideoLibrarySharpIcon />
        <h2 className="sidebar__title">
          Library
        </h2>
      </div>
      </div>
    </div>
  )
}

export default Sidebar;
