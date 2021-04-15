import React, { useState, useEffect } from "react";
import * as Icon from 'react-feather';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Projects from "./pages/Projects";
import Resumes from "./pages/Resumes";

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [profileData, setProfileData] = useState()

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/bryantit')
      .then(res => res.json())
      .then(profile => {
        setProfileData(profile);
      });
  }, [])

  lightMode ? document.body.classList.add('light') : document.body.classList.remove('light')

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add('light')
    } else {
      setLightMode(false);
      document.body.classList.remove('light')
    }
  }

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button className={lightMode ? 'light-mode-switch active' : 'light-mode-switch'} onClick={() => handleMode()}></button>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home lightMode={lightMode} profile={profileData}/>
        </Route>
        <Route path="/about" exact>
          <About profile={profileData} />
        </Route>
        <Route path="/skills" exact>
          <Resumes profile={profileData} />
        </Route>
        <Route path="/projects" exact>
          <Projects profile={profileData} />
        </Route>
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
