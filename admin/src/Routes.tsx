import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./ui/styles/App.css";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Statistics from "./pages/Statistics";
import Maps from "./pages/Maps";
import { AuthRoute } from "./utils/authRoute";

function App() {
  const location = document.location;
  const authRoute = location.pathname === "/" || location.pathname === "/login";

  return (
    <Router>
      {!authRoute ? (
        <div className="appLayout">
          <div className="appLayout__sidebar">
            <Sidebar />
          </div>
          <div className="appLayout__main">
            <Switch>
              <AuthRoute path="/home" exact component={Home} />
              <AuthRoute path="/articles" exact component={Articles} />
              <AuthRoute path="/statistics" exact component={Statistics} />
              <AuthRoute path="/maps" exact component={Maps} />
            </Switch>
          </div>
        </div>
      ) : (
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      )}
    </Router>
  );
}

export default App;
