import React from 'react';

import ChatInterface from './components/ChatInterface/ChatInterface';
import Join from './components/JoinToRoom/JoinToRoom';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={ChatInterface} />
    </Router>
  );
}

export default App;
