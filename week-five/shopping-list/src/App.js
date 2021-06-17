import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateProvider from "./components/StateProvider";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FourOFour from "./pages/FourOFour";

import "./App.css";

function App() {
  return (
    <Router>
      <StateProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={FourOFour}/>
      </Switch>
      </StateProvider>
    </Router>
  );
}

export default App;
