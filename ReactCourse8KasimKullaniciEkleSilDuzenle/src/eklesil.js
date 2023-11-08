import React, { useState } from "react";
import "./App.css"; // Eklesil.css dosyasını içe aktarın veya stil kodunu buraya ekleyin


function Eklesil() {
  const [kullanicilar, setKullanicilar] = useState([]); // Kullanıcıları tutan dizi state'i
  const [yeniAd, setYeniAd] = useState(''); // Yeni kullanıcı adı
  const [yeniSoyad, setYeniSoyad] = useState(''); // Yeni kullanıcı soyadı

  const handleAdChange = (e) => {
    setYeniAd(e.target.value);
  };

  const handleSoyadChange = (e) => {
    setYeniSoyad(e.target.value);
  };

  const handleGonderClick = () => {
    // Yeni kullanıcıyı oluştur
    const yeniKullanici = { ad: yeniAd, soyad: yeniSoyad };

    // Kullanıcıları güncelle ve yeni kullanıcıyı ekleyin
    setKullanicilar([...kullanicilar, yeniKullanici]);

    // Yeni kullanıcı bilgilerini sıfırla
    setYeniAd('');
    setYeniSoyad('');
  }

  const handleSilClick = (index) => {
    // Kullanıcıyı silmek için indeksi kullanarak yeni bir kullanıcılar dizisi oluşturun
    const yeniKullanicilar = [...kullanicilar];
    yeniKullanicilar.splice(index, 1);
    setKullanicilar(yeniKullanicilar);
  }


  const handleDuzenleClick = (index) => {
    // Kullanıcıyı silmek için indeksi kullanarak yeni bir kullanıcılar dizisi oluşturun
    const yeniKullanicilar = [...kullanicilar];

    const kullanici=yeniKullanicilar.filter((kullanici,i)=>i===index);
    const yeniler=yeniKullanicilar.filter((kullanici,i)=>i!=index);

    setKullanicilar(yeniler);

    setYeniAd(kullanici[0].ad);
    setYeniSoyad(kullanici[0].soyad);
  }

  return (
    <div className="mt-2 col-md-2 mt-5">
      <div className="form-group">
        <label htmlFor="ad" className="mb-2">Ad</label>
        <input
          type="text"
          id="ad"
          className="form-control"
          value={yeniAd}
          onChange={handleAdChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="soyad" className="mb-2 mt-2">Soyad</label>
        <input
         
          type="text"
          id="soyad"
          className="form-control mb-3"
          value={yeniSoyad}
          onChange={handleSoyadChange}
        />
      </div>
      <button className="btn btn-success" onClick={handleGonderClick}>
        Ekle
      </button>

      <h2>Kullanıcılar</h2>
      <ul className="list-group">
        {kullanicilar.map((kullanici, index) => (
          <li key={index} className="list-group-item">
            {kullanici.ad} {kullanici.soyad}
            <button
              className="btn btn-danger float-right ms-2"
              onClick={() => handleSilClick(index)}
            >
              Sil
            </button>
            <button className="btn btn-success float-right ms-2"
             onClick={() => handleDuzenleClick(index)}>
              Düzenle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Eklesil;
