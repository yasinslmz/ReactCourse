import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [],
      sepetUrunleri: [],
      sepetDropdownOpen: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/kategoriler')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ kategoriler: data });
      });
  }

  handleCategoryClick = (kategoriId) => {
    console.log('Seçilen kategori:', kategoriId);
    this.props.kategoriSec(kategoriId);
  };

  handleSepetClick = () => {
    this.setState((prevState) => ({ sepetDropdownOpen: !prevState.sepetDropdownOpen }));
  };

  componentDidUpdate(prevProps) {
    if (this.props.sepetUrunleri !== prevProps.sepetUrunleri) {
      this.setState({ sepetUrunleri: this.props.sepetUrunleri });
    }
  }

   bosaltSepet = () => {

    this.setState({sepetUrunleri:[]});
  };

  render() {
    const { sepetDropdownOpen, sepetUrunleri } = this.state;

    return (
      <div>
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo.png" height={'80'} alt="Logo" />
                  </a>

                  <ul className="nav">
                    {this.state.kategoriler.map((kategori) => (
                      <li className="scroll-to-section" key={kategori.id}>
                        <a href="#" onClick={() => this.handleCategoryClick(kategori.id)}>
                          {kategori.ad}
                        </a>
                      </li>
                    ))}
                    <li className="submenu">
                      <a href="javascript:;">Sayfalar</a>
                      <ul>
                        <li><a href="about.html">Hakkımızda</a></li>
                        <li><a href="products.html">Ürünler</a></li>
                        <li><a href="contact.html">İletişim</a></li>
                      </ul>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#explore">Explore</a>
                    </li>
                    <li className="scroll-to-section" onClick={this.handleSepetClick}>
                      <a href="#explore">Sepet: {sepetUrunleri.length}</a>
                      {sepetDropdownOpen && (
                        <div className="sepet-dropdown">
                          {/* Render sepetUrunleri in the dropdown with prices */}
                          <ul>
                            {sepetUrunleri.map((urun) => (
                              <li key={urun.id}>
                                {urun.ad} - Fiyat: {urun.fiyat}
                              </li>
                            ))}
                            <li>
                      <button className="btn btn-success btn-sm" >
                        Sepet Onayla
                      </button>{' '}
                      <button className="btn btn-danger btn-sm right2" onClick={this.bosaltSepet}>
                        Boşalt
                      </button>
                   </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
