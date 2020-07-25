import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'

const App = () => {

  const renderRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        {renderRoutes()}
      </div>
    </Router>
  );
}

export default App;
