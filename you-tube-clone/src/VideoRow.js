import Avatar from "@material-ui/core/Avatar";
import "./VideoRow.css";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';



const VideoRow = ({image,title,channel,views,timestamp,channelImage,description,verified}) =>{
    

    return (
        <div className="VideoRow">
         
            <img src={image} className="VideoRow__image"/>
            <div  className="VideoRow__details">
                <h4>{title} </h4>
                <p className="VideoRow__views" >
                    {views} • {timestamp}

                </p>
                <p className="VideoRow__channelDetails">
                <Avatar src={channelImage} className="VideoRow__channelImage">

                </Avatar>
                  <span>
                    {channel} 
                    </span>
                    {verified &&  <CheckCircleOutlineOutlinedIcon className="VideoRow__channelVerified"/>}
                   
                </p>
                <p className="VideoRow__description">
                    {description}
                </p>



            </div>

            
                 
        </div>
    )

}

export default VideoRow;