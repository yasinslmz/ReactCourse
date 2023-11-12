
import './App.css';
import React, { useState } from 'react';

function Urunler({urunler,sepeteEkle}) {

   
  return (
    <div className='row col-md-7 mt-5 ms-5'>
      <h3 className='mb-3'>Ürünler</h3>

      {urunler.map((urun)=>(
        
        
        <div className="card col-md-2 ms-5 mb-3" style={{width: "18rem"}}>
         <br />
        <img className="card-img-top " height={"170"} src={urun.resim} />
        <div className="card-body">
            <h5 className="card-title">{urun.ad}</h5>
            <p className="card-text">{urun.fiyat} Tl <br /> {urun.dolarFiyati}$</p>
            <a href="#" className="btn btn-primary" onClick={()=>sepeteEkle(urun)}>Sepete Ekle</a>
        </div>
        </div>
      )
      )}

      


    </div>
  );
}

export default Urunler;
