import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutMe } from './components/About';
import { Contact } from './components/Contact';
import { LoginForm } from './components/LoginForm'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/Login' component={LoginForm} />
      </Layout>
    );
  }
}

