import React from 'react';
import './App.scss';

//Routing import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Router>
            <Header />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
