import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import authService from './api-authorization/AuthorizeService';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
        roles: []
    };
    }

    componentDidMount = () => {
        authService.getUser()
            .then(user => {
                let roles = [...this.state.roles, user.role];
                console.log(roles);
                this.setState({ roles: roles });
            })
    }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">OneDx</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
                {
                    this.state.roles.find(r => r === "Admin")
                        ?
                        <>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/listdoctors">All Doctors</NavLink>
              </NavItem>
                        </>
                        :
                        ""
                }
                {
                    this.state.roles.find(r => r === "Doctor")
                        ? 
                        <>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/listpatients">All Patients</NavLink>
              </NavItem>
               <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/create-patient">Create Patient</NavLink>
               </NavItem>
                        </>
                            :
                        ""
               }
              <LoginMenu>
              </LoginMenu>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
