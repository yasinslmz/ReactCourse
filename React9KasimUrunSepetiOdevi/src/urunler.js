

import React, { useState, useEffect } from "react";
import "./App.css"; // Eklesil.css dosyasını içe aktarın veya stil kodunu buraya ekleyin
import elektronik from  './elektronik.jpg';
import giyim from  './giyim.jpg';
import gida from  './gida.jpg';
import kitaplar from  './kitaplar.jpg';
import axios from 'axios';





function Urunler() {

  
  const [urunler, setUrunler] = useState([]); 
  const [yeniUrun, setYeniUrun] = useState({
    ad: "",
    kisaAciklama: "",
    uzunAciklama: "",
    fiyat: "",
    dolarFiyat:"",
    kategori: "Elektronik",
    
  });
  const [detayliBilgi, setDetayliBilgi] = useState(null);
  const [sepete, setSepete] = useState(null);
  const [dolarFiyati,setDolarFiyati]=useState(0);
  const [seciliKategoriResim, setSeciliKategoriResim] = useState(null);
  const [sepetUrunleri,setSepetUrunleri]=useState([]);

  useEffect(() => {
    // Sayfa yüklendiğinde dolar kuru çek
    const API_KEY = "b6edabb238-2724697d2d-s3uouu";
    const url ="https://api.fastforex.io/fetch-all?api_key=b6edabb238-2724697d2d-s3uouu";

    axios
      .get(url)
      .then((response) => {
        const dolar = parseFloat(response.data.results.TRY);
        console.log(dolar);
        setDolarFiyati(dolar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Boş bağımlılık dizisi sayesinde bu etki yalnızca bir kez çalışacaktır.


  function dolarKuru(){
    
        const API_KEY='b6edabb238-2724697d2d-s3uouu';
        
        const url ="https://api.fastforex.io/fetch-all?api_key=b6edabb238-2724697d2d-s3uouu";

    
        axios.get(url)
        .then(response => {
            //setPosts(response.data.splice(0, 2));
            const dolar=parseFloat(response.data.results.TRY);

            console.log(dolar);
            
            
            setDolarFiyati(dolar);
            
            
        })
        .catch(error => {
            console.log(error);
        });
  }




  let alreadyExecuted = false; // Bayrak, işlemin daha önce çalıştırılıp çalıştırılmadığını izler

  useEffect(() => {
    setYeniUrun((prevUrun) => ({
      ...prevUrun,
      dolarFiyat: (prevUrun.fiyat / dolarFiyati).toFixed(2),
    }));
  }, [yeniUrun.fiyat, dolarFiyati]);

  const urunEkle =  () => {
    

    setUrunler([...urunler, yeniUrun]);
    setYeniUrun({
      ad: "", 
      kisaAciklama: "", 
      uzunAciklama: "", 
      fiyat: "", 
     dolarFiyat:"",
      kategori: "", 
      
    });
    
}

const kategoriResimler = {
  Elektronik: elektronik,
  Giyim: giyim,
  Gıda: gida,
  Kitaplar: kitaplar,
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
    let seciliResim = null;
    switch (kategori) {
      case "Elektronik":
        seciliResim = elektronik;
        break;
      case "Giyim":
        seciliResim = giyim;
        break;
      case "Gıda":
        seciliResim = gida;
        break;
      case "Kitaplar":
        seciliResim = kitaplar;
        break;
      default:
        seciliResim = null;
    }
    
    setSeciliKategoriResim(seciliResim); // Kategori resmini ayarla
    return seciliResim;
  };

  const detayGoster = (urun) => {
    const urunKategori = urun.kategori;
    const urunResim = kategoriResimler[urunKategori];
    setSeciliKategoriResim(urunResim);
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
        kisaAciklama: urun.kisaAciklama,
        uzunAciklama: urun.uzunAciklama,
        fiyat: urun.fiyat,
        dolarFiyat:"",
        kategori: urun.kategori,
        resim: "",
      });

      detayKapat();
      handleSil(urun);
  }

  
  const sepeteEkle = (urun) => {
    // Burada sepete ürünü ekleyecek işlemleri yapabilirsiniz.
    console.log(`Ürün sepete eklendi: ${urun.ad}`);
    setSepete(urun);
    setSepetUrunleri([...sepetUrunleri,urun]);

  };
 
  const sepettenCikar = (index) => {
    const yeniSepetUrunleri = [...sepetUrunleri];
    yeniSepetUrunleri.splice(index, 1);
    setSepetUrunleri(yeniSepetUrunleri);
    if(!sepetUrunleri){
      setSepete("");
    }
  };

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
              <label htmlFor="kisaAciklama" className=" mt-2">Ürün Kısa Açıklaması:</label>
              <textarea
                className="form-control"
                id="kisaAciklama"
                name="kisaAciklama"
                rows="3"
                value={yeniUrun.kisaAciklama}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="uzunAciklama" className=" mt-2">Ürün Uzun Açıklaması:</label>
              <textarea
                className="form-control"
                id="uzunAciklama"
                name="uzunAciklama"
                rows="3"
                value={yeniUrun.uzunAciklama}
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
                onChange={(e)=>{
                  
                  const name = e.target.name;
                  const value = e.target.value;
                  setYeniUrun({
                    ...yeniUrun,
                    [name]: value,
                  });
                  


                }}
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
            { urunler.map((urun, index) => { 
               const urunKategori = urun.kategori;
               const urunResim = kategoriResimler[urunKategori];
              return (
              <div
                key={index}
                className="col-md-4 mb-4"
                
              >
                <div className="card shadow"> {/* shadow sınıfı ekledik */}
                <img height={"130"} src={urunResim} className="card-img-top" style={{ cursor: "pointer" }}
                onClick={() => detayGoster(urun)}/>

                  <div className="card-body">
                    <h5 className="card-title">{urun.ad}</h5>
                    <p className="card-text">{urun.kisaAciklama}</p>
                    <p className="card-text">Fiyat: {urun.fiyat} TL <br />  {urun.dolarFiyat}$</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => sepeteEkle(urun)}
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>);
            })}
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
                <p>{detayliBilgi.kisaAciklama}</p>
                <p>{detayliBilgi.uzunAciklama}</p>
                <p>Fiyat: {detayliBilgi.fiyat} TL <br />  {detayliBilgi.dolarFiyat}$</p>
                
                <p>Kategori: {detayliBilgi.kategori}</p>
                <img
                  src={seciliKategoriResim}
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

{sepete && (
  <div className="mt-5">
    <h2>Sepet</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Ürün Adı</th>
          <th scope="col">Fiyat</th>
          <th scope="col">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {sepetUrunleri.map((sepetUrunu, index) => (
          <tr key={index}>
            <td>{sepetUrunu.ad}</td>
            <td>{sepetUrunu.fiyat} TL</td>
            <td>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => sepettenCikar(index)}
              >
                Sepetten Çıkar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


    </div>
  );
}

export default Urunler;

































