
import './App.css';
import React, { useState } from 'react';

function Urunler({urunler,sepeteEkle}) {

  const [detayliBilgi, setDetayliBilgi] = useState(null);
  
    const detayGoster = (urun) => {
  
      setDetayliBilgi(urun);
    };

    const detayKapat = () => {
      setDetayliBilgi(null);
    };
   
  return (
    <div className='row col-md-7 mt-5 ms-5'>
      <h3 className='mb-3'>Ürünler</h3>

      {urunler.map((urun)=>(
        
        
        <div className="card col-md-2 ms-5 mb-3" style={{width: "18rem"}}>
         <br />
        <img className="card-img-top " height={"170"} src={urun.resim} style={{ cursor: "pointer" }}
                onClick={() => detayGoster(urun)}/>
        <div className="card-body">
            <h5 className="card-title">{urun.ad}</h5>
            <p className="card-text">{urun.fiyat} Tl <br /> {urun.dolarFiyati}$</p>
            <a href="#" className="btn btn-primary" onClick={()=>sepeteEkle(urun)}>Sepete Ekle</a>
        </div>
        </div>
      )
      )}

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
        
        <p>Fiyat: {detayliBilgi.fiyat} TL <br />  {detayliBilgi.dolarFiyati}$</p>
        
        <p>Kategori: {detayliBilgi.kategori}</p>
        <img 
          src={detayliBilgi.resim}
          className="img-fluid"
        />
        <a href="#" className="btn btn-primary mt-3" onClick={()=>sepeteEkle(detayliBilgi)}>Sepete Ekle</a>
      </div>
      
    </div>
  </div>
</div>
)}

      


    </div>
  );
}

export default Urunler;
