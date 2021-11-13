import "./App.scss";
import { BrowseRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./Components/Login";
import CarList from "./Components/CarList";

function App() {
  return <div className="App">
    {/* <Login /> */}
    <CarList />
  </div>;
}

export default App;
