import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import LogIn from "./Component/Login/LogIn";
import Registration from "./Component/Registration/Registration";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
