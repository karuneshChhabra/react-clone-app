import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';



import SideRow from './SideRow';
import "./SideView.css";

function SideView() {
    return (
        <div className="side__view">
              
            <SideRow selected title="Home" Icon={HomeIcon}/>
            <SideRow title="Trending" Icon={WhatshotIcon}/>
           <SideRow title="Subscription" Icon={SubscriptionsIcon}/>
           <hr/>
           <SideRow  title="Library" Icon={VideoLibraryIcon}/>
            <SideRow title="History" Icon={HistoryIcon}/>
           <SideRow title="Your Videos" Icon={OndemandVideoIcon}/>
           <SideRow title="Watch Video" Icon={WatchLaterIcon}/>
           <SideRow title="Liked Video" Icon={ThumbUpAltIcon}/>
            
        </div>
    )
}

export default SideView;
