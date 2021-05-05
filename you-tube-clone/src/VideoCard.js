import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";



function VideoCard({title, image, channel, views, timestamp, channelImage}) {
    return (
        <div className="VideoCard">
            <img src={image} className="VideoCard__Image" />

            <div className="VideoCard__info">
                <Avatar src={channelImage} className="VideoCard__channelImage"/>
              <div className="VideoCard__text">
                <h4>{title}</h4>
                <p>
                    {channel}
                </p>
                <p>
                    {views} • {timestamp}
                </p>
                </div>

            </div>
            
            
        </div>
    )
}

export default VideoCard
