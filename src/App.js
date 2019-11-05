import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Layout from "./components/Layout";
import { navData } from "./assets/data/navData";
import { Route } from "react-router-dom";

function App() {
  const [selectedView, setSelectedView] = useState(navData[0]);

  useEffect(() => {
    console.log("useEffect", selectedView);
  }, [selectedView]);

  const handleNavChange = clickedNav => {
    console.log("selectedView", selectedView);
    const newSelectedView = navData.filter(el => clickedNav === el.name);
    setSelectedView(newSelectedView[0]);
  };
  return (
    <div className="App">
      <Layout
        photo={selectedView.photo}
        alt={selectedView.alt}
        handleNavChange={handleNavChange}
      >
        <Route exact path="/" render={() => <Home />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/projects" render={() => <Projects />} />
      </Layout>
    </div>
  );
}

export default App;
