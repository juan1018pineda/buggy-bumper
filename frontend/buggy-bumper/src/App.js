import "./App.scss";
import { BrowseRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./Components/Login";

function App() {
  return <div className="App">
    <Login />
  </div>;
}

export default App;
