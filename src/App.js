import React from "react";
import "./App.css";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout photo={selected.photo} alt={selected.alt}>
        <Contact></Contact>
        <Home></Home>
        <Projects></Projects>
      </Layout>
    </div>
  );
}

export default App;
