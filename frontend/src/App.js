import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:id" component={PostPage} />
      </Fragment>
      {/* <div className="App">
      <Posts/>
    </div> */}
    </Router>
    
  );
}

export default App;
