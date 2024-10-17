import React from "react";
import Home from "./page/Home/Home";
import "./styles/global.css";
import ThemeToggle from './component/ThemeToggle';

const App = () => (
  <div className="app">
    <ThemeToggle />
    <Home />
  </div>
);

export default App;
