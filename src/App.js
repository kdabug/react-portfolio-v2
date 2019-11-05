import React from "react";
import "./App.css";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact></Contact>
      <Home></Home>
      <Projects></Projects>
    </div>
  );
}

export default App;
