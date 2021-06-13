import Avatar from "@material-ui/core/Avatar";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ({img,channelName,subscribers,videos,description,verified}) =>{


    return(
        <div className="ChannelRow">
            
                <img src={img} className="ChannelRow__channelImage"/>
                <div className="ChannelRow__details">
                    <div className="ChannelRow__channelname">{channelName} 
                    {verified && <CheckCircleOutlineOutlinedIcon className="ChannelRow__verified"/>}
                    </div>
                    <div className="ChannelRow__subscribers">
                        <span>{subscribers}</span>
                        <span> subscribers</span>
                        <span> • {videos}</span>
                        <span> Videos</span>

                    </div>
                    <div className="ChannelRow__description">
                        {description}
                    </div>


                </div>
            </div>
         

           

         
       
    )

}

export default ChannelRow;
