import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Support from '../support';
import Login from '../login';
import Register from '../register';

import LogoAstral from '../../img/astral-logo.png';
import LogoStellar from '../../img/stellar-logo.png';

const App = () => (
  <div>
    <header className="navbar">
      <Link to="/">
        <img src={LogoAstral} alt="Astral logo" className="navbar__logo" />
      </Link>
      <Link className="navbar__link" activeClassName="navbar__link--active" to="/about">About</Link>
      <Link className="navbar__link" activeClassName="navbar__link--active" to="/support">Support</Link>
      <a className="navbar__link" href="http://status.astralwallet.io/">Status</a>
      <Link className="navbar__link" activeClassName="navbar__link--active" to="/login">Log In</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </main>

    <footer className="footer">
      <img src={LogoStellar} alt="Stellar logo" className="footer__logo" />
      <p className="footer__plus">+</p>
      <img src={LogoAstral} alt="Astral logo" className="footer__logo" />
    </footer>
  </div>
)

export default App