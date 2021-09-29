import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./ui/styles/App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Statistics from "./pages/Statistics";
import Maps from "./pages/Maps";
import { ProtectedRoute } from "./utils/protectedRoute";
import { RedirectRoute } from "./utils/redirectRoute";

function App() {
  return (
    <Router>
      <div className="appLayout">
        <Switch>
          <ProtectedRoute path="/home" exact component={Home} />
          <ProtectedRoute path="/articles" exact component={Articles} />
          <ProtectedRoute path="/statistics" exact component={Statistics} />
          <ProtectedRoute path="/maps" exact component={Maps} />
          <RedirectRoute path="/" exact component={Register} />
          <RedirectRoute path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
