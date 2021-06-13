import "./App.css";

import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import SideView from "./SideView";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchText" exact>
            <Header></Header>
            <div className="bottom__panel">
              <SideView />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header></Header>
            <div className="bottom__panel">
              <SideView />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
