import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Masthead from './components/Masthead';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import SocialMedia from './components/SocialMedia';
import Blog from './components/Blog';
import OtherPublications from './components/OtherPublications'

const Pages = ({ profile, blog }) => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={props =>
          (<Masthead {...props} profile={profile}/>)
        }/>
        <Route exact path="/about" render={props =>
          (<About {...props} profile={profile}/>)
        }/>
        <Route exact path="/projects" render={props =>
            (<Projects {...props} profile={profile}/>)
          }/>
        <Route exact path="/skills" render={props =>
            (<Skills {...props} profile={profile}/>)
          }/>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
          <Route exact path="/blog" render={props =>
              (<Blog {...props} blog={blog}/>)
            }/>
      </Switch>
      <Route exact path="/other-publications" render={props =>
          (<OtherPublications {...props} profile={profile}/>)
        }/>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Pages
