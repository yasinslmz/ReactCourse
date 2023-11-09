

import React, { useState } from "react";
import "./App.css"; // Eklesil.css dosyasını içe aktarın veya stil kodunu buraya ekleyin
import elektronik from  './elektronik.jpg';
import giyim from  './giyim.jpg';
import gida from  './gida.jpg';
import kitaplar from  './kitaplar.jpg';


function UrunEkle() {
  const [urunler, setUrunler] = useState([]); 
  const [yeniUrun, setYeniUrun] = useState({
    ad: "",
    aciklama: "",
    fiyat: "",
    kategori: "",
    resim: "",
  });
  const [detayliBilgi, setDetayliBilgi] = useState(null);

  const urunEkle = () => {
    const kategori = document.getElementById("urunKategorisi").value;
    const yeniUrunData = {
      ad: document.getElementById("urunAdi").value, 
      aciklama: document.getElementById("urunAciklamasi").value, 
      fiyat: document.getElementById("urunFiyati").value, 
      kategori: kategori, 
      resim: getResimByKategori(kategori),
    };
  
    setUrunler([...urunler, yeniUrunData]); 
    setYeniUrun({
      ad: "",
      aciklama: "",
      fiyat: "",
      kategori: "",
      resim: "",
    });
  };

  const handleInputChange = (e) => {
    // Input değişikliklerini yakalamak için bu fonksiyonu kullanabilirsiniz
    const name = e.target.name;
    const value = e.target.value;
    setYeniUrun({
      ...yeniUrun,
      [name]: value,
    });
  };
 
  const getResimByKategori = (kategori) => {
    switch (kategori) {
      case "Elektronik":
        return elektronik;
      case "Giyim":
        return giyim;
      case "Gıda":
        return gida;
      case "Kitaplar":
        return kitaplar;
      default:
        return "";
    }
  };

  const detayGoster = (urun) => {
    setDetayliBilgi(urun);
  };

  const detayKapat = () => {
    setDetayliBilgi(null);
  };

  const handleSil = (urun) => {
    
    const yeniUrunler = urunler.filter((u) => u !== urun);
    
    setUrunler(yeniUrunler);
   
    detayKapat();
  };

  const handleDuzenle=(urun)=>{
    setYeniUrun({
        ad: urun.ad,
        aciklama: urun.aciklama,
        fiyat: urun.fiyat,
        kategori: urun.kategori,
        resim: "",
      });

      detayKapat();
      handleSil(urun);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mt-4">
          <h2>Ürün Ekle</h2>
          <form>
          
            <div className="form-group">
              <label htmlFor="urunAdi" className=" mt-2">Ürün Adı:</label>
              <input
                type="text"
                className="form-control"
                id="urunAdi"
                name="ad"
                value={yeniUrun.ad}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="urunAciklamasi" className=" mt-2">Ürün Açıklaması:</label>
              <textarea
                className="form-control"
                id="urunAciklamasi"
                name="aciklama"
                rows="3"
                value={yeniUrun.aciklama}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="urunFiyati" className=" mt-2">Ürün Fiyatı:</label>
              <input
                type="text"
                className="form-control"
                id="urunFiyati"
                name="fiyat"
                value={yeniUrun.fiyat}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="urunKategorisi" className=" mt-2">Ürün Kategorisi:</label>
              <select
                className="form-control"
                id="urunKategorisi"
                name="kategori"
                value={yeniUrun.kategori}
                onChange={handleInputChange}
              >
                <option value="Elektronik">Elektronik</option>
                <option value="Giyim">Giyim</option>
                <option value="Gıda">Gıda</option>
                <option value="Kitaplar">Kitaplar</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-success mt-2"
              onClick={urunEkle}
            >
              Ekle
            </button>
          
          </form>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-6 ps-5 mt-4">
          <h2>Ürünler</h2>
          <div className="row">
            {urunler.map((urun, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
                style={{ cursor: "pointer" }}
                onClick={() => detayGoster(urun)}
              >
                <div className="card shadow"> {/* shadow sınıfı ekledik */}
                  <img
                    height={"130"}
                    src={urun.resim}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{urun.ad}</h5>
                    <p className="card-text">Fiyat: {urun.fiyat} TL</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ürün Detayları Pop-up */}
      {detayliBilgi && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{detayliBilgi.ad}</h5>
                <button
                  type="button"
                  className="close btn"
                  onClick={detayKapat}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{detayliBilgi.aciklama}</p>
                <p>Fiyat: {detayliBilgi.fiyat} TL</p>
                <p>Kategori: {detayliBilgi.kategori}</p>
                <img
                  src={detayliBilgi.resim}
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleSil(detayliBilgi)}
                >
                  Sil
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDuzenle(detayliBilgi)}
                >
                  Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UrunEkle;

































