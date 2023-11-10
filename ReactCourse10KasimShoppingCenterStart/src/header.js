import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className='ps-5 pe-5'>
        <NavbarBrand href="/" className="mr-auto">Shopping Center</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="#">Kategoriler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ürünler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">İletişim</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className='ml-auto'>
            <DropdownToggle nav caret>
                Sepet
            </DropdownToggle>
            <DropdownMenu right className="text-right">
                <DropdownItem>Ürün 1</DropdownItem>
                <DropdownItem>Ürün 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sepeti Görüntüle</DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
