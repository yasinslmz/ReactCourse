import { Form } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import {React,useEffect,useState} from 'react';

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  

  const [yeniUrunler,setYeniUrunler]=useState([])
  const navigate = useNavigate();
  
  let { state } = useLocation();
  console.log(state);

  useEffect(()=>{
    
    

    setYeniUrunler(state);
    console.log(yeniUrunler);
  },[])

  return (
    <div id="contact" className="row ms-5 me-0">
              <h2 className="mt-4 mb-4" style={{textAlign:"center"}}>Ürünler</h2>

              { yeniUrunler &&(yeniUrunler.map((urun)=>(

                   
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
      ))}
    </div>
  );
}

