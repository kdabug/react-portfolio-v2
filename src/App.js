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

  const handleNavChange = newSelectedView => {
    //NavData.filter(name => );
    setSelectedView(newSelectedView);
  };
  return (
    <div className="App">
      <Layout
        photo={selectedView.photo}
        alt={selectedView.alt}
        handleNavChange={handleNavChange}
        navData={navData}
      >
        <Route exact path="/" render={() => <Contact />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/projects" render={() => <Projects />} />
      </Layout>
    </div>
  );
}

export default App;
