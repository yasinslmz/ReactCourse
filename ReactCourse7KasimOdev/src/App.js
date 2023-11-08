import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import logo2 from './logo192.png';

function App() {


  const [sepet, setSepet] = useState([]); // Ürünleri saklayacak dizi
  const [toplamFiyat, setToplamFiyat] = useState(0); // Toplam fiyat

   {/* Ürün bilgilerimi bir objede tutup ordan çektim*/}

  const urunler = [
    {
      ad: 'Yeşil Gömlek',
      kategori: 'Gömlek',
      fiyat: '200',
      image: './images/gomlek.jpg',
    },
    {
      ad: 'V Yaka Tişört',
      kategori: 'Tişört',
      fiyat: '250',
      image: './images/tscategoryhirt.jpg',
    },
    {
      ad: 'Mavi Pantalon',
      kategori: 'Pantalon',
      fiyat: '300',
      image: './images/pantalon.jpg',
    },
    {
      ad: 'Deri Ceket',
      kategori: 'Ceket',
      fiyat: '1000',
      image: './images/ceket.jpg',
    },
    {
      ad: 'Kırmızı Gömlek',
      kategori: 'Gömlek',
      fiyat: '400',
      image: './images/gomlekkirmizi.jpg',
    },
    {
      ad: 'Kot Pantalon',
      kategori: 'Pantalon',
      fiyat: '400',
      image: './images/pantalon.jpg',
    },
  ];


    // Ürünü sepete ekle
  const urunSepeteEkle = (urun) => {
    setSepet([...sepet, urun]); // Ürünü sepete ekliyorum bununla
    setToplamFiyat(toplamFiyat + parseInt(urun.fiyat)); 
  };

  const sepetiOnayla = () => {
    
    alert("Siparişiniz onaylandı!");
    
    // toplam fiyatı 0 a çekiyorum onaylandığı için
    setSepet([]);
    setToplamFiyat(0);
  };
  

  return (
    <div className="App">

     {/* Navbar için */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ marginLeft: '150px' }}>
          <img src={logo2} width="80" alt="Logo" />
        </a>

        <div className="navbar-collapse justify-content-end" style={{ marginRight: '150px' }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ürünler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Kategorilerim ve Ürünlerim İçin */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="kategori">
              <h4 style={{ fontSize: '24px', border: '1px solid #ccc', padding: '10px', boxShadow: '2px 2px 5px #888' }}>
                Kategoriler
              </h4>
              <ul>
                <li>
                  <a href="">Gömlek</a>
                </li>
                <hr></hr>
                <li>
                  <a href="">Tişört</a>
                </li>
                <hr></hr>
                <li>
                  <a href="">Pantalon</a>
                </li>
                <hr></hr>
                <li>
                  <a href="">Ceket</a>
                </li>
                <hr></hr>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <h4 style={{ fontSize: '24px', border: '1px solid #ccc', padding: '10px', boxShadow: '2px 2px 5px #888' }}>
                Ürünler
              </h4>
                    {/* Kategori kartları ve ürünler için */}
                      {urunler.map((urun, index) => (
                                <div className="col-md-4" key={index}>
                                  <div className="kart" style={{ border: '1px solid #ccc', padding: '10px', boxShadow: '2px 2px 5px #888' }}>
                                    <img src={urun.image} width="100" alt={urun.ad} />
                                    <h4>{urun.ad}</h4>
                                    <p>Kategori: {urun.kategori}</p>
                                    <p>Fiyat: {urun.fiyat} TL</p>
                                    <button className="sepete-ekle-button" onClick={() => urunSepeteEkle(urun)}>Sepete Ekle</button>
                                  </div>
                                </div>
                    ))}

            </div>
          </div>
        </div>
      </div>

      <div className="sepet">
          <h4>Sepet</h4>
          <ul>
            {sepet.map((urun, index) => (
              <li key={index}>{urun.ad} - {urun.fiyat} TL</li>
            ))}
          </ul>
          <p>Toplam Fiyat: {toplamFiyat} TL</p>
          <button className="sepeti-onayla-button" onClick={sepetiOnayla}>Sepeti Onayla</button>
      </div>



    </div>
  );
}

export default App;
