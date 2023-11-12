import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
function Kategoriler({ kategoriler, urunler, yeniUrun, setYeniUrun, dolarFiyati, setResimPath, urunEkle }) {
  const [urunEkleFormGoster, setUrunEkleFormGoster] = useState(false);

  const resimekleburada = (e) => {
    // Resim yolunu kullanarak ürünü ekle
    const blob = new Blob([e.target.files[0]]);
    const objectUrl = URL.createObjectURL(blob);
    const lastId = urunler[urunler.length - 1].id;

    setYeniUrun({
      ...yeniUrun,
      resim: objectUrl.toString(),
      dolarFiyati: Number((yeniUrun.fiyat / dolarFiyati).toFixed(2)),
      id: lastId + 1,
    });
  };

  const urunEkleFormunuToggleEt = () => {
    setUrunEkleFormGoster(!urunEkleFormGoster);
  };

  const handleUrunEkle = () => {
    urunEkle();
    setUrunEkleFormGoster(false); // Ekleme işlemi tamamlandığında formu gizle
  };
  return (
    <div className="col-md-2 mt-5 ms-5">
      <h3 className="mb-3">Kategoriler</h3>
      <ul className="list-group ">
        {kategoriler.map((kategori, index) => (
          <li key={index} className="mt-2 list-group-item">
            
            <Link className='link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
             to="/kategorigrup" state={urunler} ><a className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
              {kategori["ad"]}
            </a></Link>

          </li>
        ))}
      </ul>

      <div className="mt-4">
      {urunEkleFormGoster && (
          
            <form style={{ display: urunEkleFormGoster ? 'block' : 'none' }}>
        
          
        <div className="form-group">
          <h2>Ürün Ekle</h2>
          <label htmlFor="urunAdi" className=" mt-2">Ürün Adı:</label>
          <input
            type="text"
            className="form-control"
            id="urunAdi"
            name="ad"
            value={yeniUrun.ad}
            onChange={(e)=>{setYeniUrun({ ...yeniUrun, ad: e.target.value })}}
            x
          />
        </div>
        <div className="form-group">
          <label htmlFor="aciklama" className=" mt-2">Ürün Açıklaması:</label>
          <textarea
            className="form-control"
            id="aciklama"
            name="aciklama"
            rows="3"
            value={yeniUrun.aciklama}
            onChange={(e)=>{setYeniUrun({ ...yeniUrun, aciklama: e.target.value })}}
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
            onChange={(e)=>{setYeniUrun({ ...yeniUrun, fiyat: Number(e.target.value) })}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resim" className=" mt-2">Ürün Resmi:</label>
          <input
            className="form-control"
            id="resim"
            name="resim"
            rows="3"
            type='file'
            onChange={(e)=>resimekleburada(e)}
          />
        </div>
        
        
        <div className="form-group">
          <label htmlFor="urunKategorisi" className=" mt-2">Ürün Kategorisi:</label>
          <select
            className="form-control"
            id="urunKategorisi"
            name="kategori"
            onChange={(e)=>{setYeniUrun({ ...yeniUrun, kategori: e.target.value })}}
            defaultValue={"Elektronik"}
            
          >
            
            {
              kategoriler.map((kategori)=>(
                <option value={kategori.ad}>{kategori.ad}</option>
              ))
            }

          </select>
        </div>
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={() => urunEkle()}
        >
          Ürün Ekle
        </button>
      
      
      
          
          </form>
        )}
        <button type="button" className="btn btn-success mt-2" onClick={urunEkleFormunuToggleEt}>
        {urunEkleFormGoster ? 'Formu Gizle ▲' : 'Ürün Ekle Formu ▼'}
      </button>
      </div>
    </div>
  );
}

export default Kategoriler;


