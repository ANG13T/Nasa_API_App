import React, {Component} from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Post from './Post'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/:post_id" component={Post}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
