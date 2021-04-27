import './App.css';

import Header from "./Header";
import RecommendedVideos from './RecommendedVideos';
import SideView from './SideView';



function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="bottom__panel">
    <SideView/>
    <RecommendedVideos/>
    </div>


     
    </div>
  );
}

export default App;
