import React, { Component } from 'react';
import './Navi.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';



export default class Navi extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }



  render() {
    return (
      <div>
        <Navbar light expand="md" className='ps-5 pe-5 navbar navbg ' >
          <NavbarBrand href="/" className="mr-auto fs-3 font-weight-bold  ">Listen & Live</NavbarBrand>
          <NavbarToggler className="ml-auto  navbg" />
          <Collapse navbar className='justify-content-end   '>
            <Nav className="mr-auto  " navbar>
              <NavItem>
                <NavLink href="/components/">Category </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="/components/">Albums</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>

              <NavItem isOpen={this.state.isOpen}>
                <UncontrolledDropdown nav inNavbar onClick={this.toggle}>
                  <DropdownToggle nav caret >
                    Cart - {this.props.cart.length}
                  </DropdownToggle>
                  <DropdownMenu end className='navbar-bg text-black navbg mt-1 borderless '>
                    {this.props.cart.map((cartItem) => (
                      <DropdownItem key={cartItem.album.id}>
                        <Button
                          onClick={() => this.props.removeToCart(cartItem.album)}
                          color="danger"
                          size='sm'
                          className='me-2'
                        >
                          X
                        </Button>
                        {cartItem.album.albumName}
                        <span className='ms-2'>
                          [{cartItem.quantity}]
                        </span>
                      </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem >Total: {this.props.calculateCartTotal()}$</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.props.clearCart}>Clear All</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}

