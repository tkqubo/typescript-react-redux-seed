/* tslint:disable */
const logo = require('./logo.svg');
require('./Header.styl');
/* tslint:enable */
import * as React from 'react';
import * as ReactRouter from 'react-router';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

declare const process: any;

export class Header extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
  render(): JSX.Element {
    return (
      <Navbar inverse className='Header'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} />
              TypeScript-React-Redux Seed ({process.env.NODE_ENV})
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown id='header-dropdown' eventKey={3} title='DropDown'>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Action</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
