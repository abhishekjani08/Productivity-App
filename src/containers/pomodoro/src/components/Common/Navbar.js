import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { getDarkMode } from '../../reducers/SettingsReducer';

export class Navigation extends Component {
  static propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { darkMode } = this.props;

    return (
      <div>
        <Navbar
          color={darkMode ? 'primary' : 'light'}
          className={darkMode ? 'navbar-dark' : 'navbar-light'}
          fixed="top"
          expand="sm"
        >
          <Link className="navbar-brand" to="/">
            <span role="img" aria-label="tomato-emoji">
              🍅
            </span>{' '}
            Tomato Timer
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </NavItem>
              <NavItem />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
});

export default connect(mapStateToProps)(Navigation);
