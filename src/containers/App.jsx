import React, { Component } from 'react';
import Header from '../components/Header';
import Races from '../components/Races';
import Home from '../components/Home';
import Upcoming from '../components/Upcoming';
import Top from '../components/Top';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };

    this.handler = this.handler.bind(this);
  }

  handler(page) {
    // Do something in the future
    this.setState({ page });
  }

  render() {
    const { page } = this.state;
    let currentPage = <Home />;
    const head = <Header handler={this.handler} active={page} />;

    switch (page) {
      case 'top': currentPage = <Top />; break;
      case 'upcoming': currentPage = <Upcoming />; break;
      case 'races': currentPage = <Races />; break;
      case 'home':
      default: currentPage = <Home />; break;
    }
    return (
      <React.Fragment>
        {head}
        {currentPage}
      </React.Fragment>
    );
  }
}
