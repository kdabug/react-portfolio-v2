import React from "react";
import "./App.css";
import Home from "./views/Home";
import Layout from "./views/Layout";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Contact></Contact>
        <Home></Home>
        <Projects></Projects>
      </Layout>
    </div>
  );
}

export default App;
