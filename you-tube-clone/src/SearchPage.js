import "./SearchPage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import TuneOutlined from "@material-ui/icons/TuneOutlined";

const SearchPage = () => {
  return (
    <div className="SearchPage">
      <div className="SearchPage__filter">
        <TuneOutlined />

        <h4>Filter</h4>
      </div>
      <hr />
      <h4> Latest from Clever Programmer </h4>
      <ChannelRow 
      img="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
      channelName="Clever Programmer 🔥"
      subscribers="966K"
      verified="true"
      videos="591"
      description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr/>
      
      <VideoRow
        title="Let's Build a YouTube Clone with REACT JS for Beginners by Clever Programmer"
        image="https://i.ytimg.com/vi/P2cU2sEI-Vo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7X5bWYY1Bf1pPkpoV0a4gM9WzmA"
        channel="Clever Programmer"
        views="156K views"
        timestamp="Streamed 8 months ago"
        verified="true"
        description="Today you're going to be building the Coinbase Clone with React Native hosted by Jessy & Tanner ⚠️ Btw are you interested in .."
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
};

export default SearchPage;
