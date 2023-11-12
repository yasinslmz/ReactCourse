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

function Header({seciliUrunler,removeFromCart,onaylaSepet,bosaltSepet}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
   // Sepet bilgilerini hesapla
   const toplamUrun = seciliUrunler.length;
   
   const toplamFiyat = seciliUrunler.reduce((toplam, urun) => toplam + urun.fiyat, 0);
   const toplamFiyatDolar = seciliUrunler.reduce((toplam, urun) => toplam + urun.dolarFiyati, 0);
  return (
    <div>
      <Navbar color="light" light expand="md" className='ps-5 pe-5'>
        <NavbarBrand href="/" className="mr-auto">Shopping Center</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav className="ml-auto " navbar>
            
            <NavItem>
              <NavLink href="#">Ürünler</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar className='ml-auto'>
                  <DropdownToggle nav caret className='genis-dropdown-toggle'>
                    Sepet {'{'}{toplamUrun}{'}'} - Toplam {toplamFiyat} TL
                  </DropdownToggle>
                  <DropdownMenu right className="text-right genis-dropdown-menu">
                    {seciliUrunler.map((item) => (
                      <DropdownItem key={item.id}>
                        <span>{item.ad}</span> - {item.fiyat} Tl{' '}
                        <button className="btn btn-danger btn-sm right" onClick={() => removeFromCart(item.id)}>
                          X
                        </button>
                      </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                      Toplam: {toplamFiyat} TL  ({toplamFiyatDolar}$)  
                    </DropdownItem>
                    
                    <DropdownItem>
                      <button className="btn btn-success btn-sm" onClick={onaylaSepet}>
                        Sepet Onayla
                      </button>{' '}
                      <button className="btn btn-danger btn-sm right2" onClick={bosaltSepet}>
                        Boşalt
                      </button>
                    </DropdownItem>
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
