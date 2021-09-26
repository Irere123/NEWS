import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./ui/styles/App.css";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Statistics from "./pages/Statistics";
import Maps from "./pages/Maps";

function App() {
  const location = document.location;
  const authRoute =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <Router>
      {!authRoute ? (
        <div className="appLayout">
          <div className="appLayout__sidebar">
            <Sidebar />
          </div>
          <div className="appLayout__main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/articles" exact component={Articles} />
              <Route path="/statistics" exact component={Statistics} />
              <Route path="/maps" exact component={Maps} />
            </Switch>
          </div>
        </div>
      ) : (
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      )}
    </Router>
  );
}

export default App;
