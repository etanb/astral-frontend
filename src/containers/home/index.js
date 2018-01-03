import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import algo from '../../img/algorhythm.svg';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div className="homepage">
    <div className="homepage__hero">
      <div className="homepage__hero-title">
        <p>
          Astral is a secure and trustworthy Stellar wallet
          supporting the best Stellar-based tokens
        </p>
        <p>
          Earn XLM via auto-enrollment in the inflation pool
        </p>
      </div>
      <div className="homepage__hero-cta">
        <Link className="homepage__hero-cta-button" to="/register"></Link>
      </div>
    </div>
    <div className="homepage__main">
      <div className="homepage__main-content homepage__main-content--left">
        <img src={algo} />
      </div>
      <div className="homepage__main-content homepage__main-content--right">
        <h2 className="homepage__main-content-headline">SECURE</h2>
        <p className="homepage__main-content-text">Data is encrypted with AES-256, and never decrypted in-flight</p>
        <p className="homepage__main-content-text">Traffic through our web servers runs entirely on SSL</p>
        <p className="homepage__main-content-text">Mandatory 2 Factor Authentification for all accounts using TOTP</p>
        <p className="homepage__main-content-text">Passwords are hashed with Argon2, the winner of the 2015 Password Hashing Competition</p>

        <h2 className="homepage__main-content-headline">EARN XLM</h2>
        <p className="homepage__main-content-text">All eligible accounts are auto-enrolled in an inflation pool, earning inflationary XLM every week, proportional to their balance</p>

        <h2 className="homepage__main-content-headline">MULTIPLE ADDRESSES</h2>
        <p className="homepage__main-content-text">Astral allows users to easily generate multiple application specific addresses to enable organization and enhances safety through further decentralized storage of your Lumens and Stellar tokens</p>

        <h2 className="homepage__main-content-headline">TOKENS</h2>
        <p className="homepage__main-content-text">Ongoing support and development in conjunction with the growth of the Stellar ecosystem including support of various tokens</p>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)