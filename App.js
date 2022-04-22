import react from "react";

import { Navbar } from "./navbar/navbar";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Package from "./pages/Package";
import Experinces from "./pages/experinces";
import Position from "./pages/position";
import Testapi from "./components/home/testapi";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/packages">
          <Package />
        </Route>
        <Route path="/Experinces">
          <Experinces />
        </Route>
        <Route path="/position">
          <Position />
        </Route>
        <Route path="/product">
          <Testapi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
