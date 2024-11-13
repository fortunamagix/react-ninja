import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styled from 'styled-components';

// Global Styles
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
`;
// App Component
const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle/>
        <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </Navbar>

        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/services">
            <ServicesPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/portfolio">
            <PortfolioPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;