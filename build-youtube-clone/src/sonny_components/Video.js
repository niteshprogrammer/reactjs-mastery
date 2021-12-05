import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Video.css';
function Video({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className="video">
      <img className="video__thumbnail" src={image} alt="Video Thumbnail" />
      <div className="video__info">
        <Avatar className="video__avatar" alt="creator profile" src={channelImage} />
        <div className="video__description">
          <h4 className="video__title">{title}</h4>
          <p className="video__channel">{channel}</p>
          <p className="video__views">{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default Video;
