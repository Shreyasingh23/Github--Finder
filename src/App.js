import React from "react";
import logo from "./logo2.png";
import "./App.css";
import "./style.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile/>
    </div>
  );
}

export default App;
