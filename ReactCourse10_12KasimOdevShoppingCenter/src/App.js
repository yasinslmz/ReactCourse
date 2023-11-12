import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Kategoriler from './kategoriler';
import Urunler from './Urunler';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [dolarFiyati,setDolarFiyati]=useState(0);

  const [kategoriler, setKategoriler] = useState([
    { id: 0, ad: "Elektronik", desc: "Elektronik ürünler kategorisi" },
    { id: 1, ad: "Giyim", desc: "Giyim ürünleri kategorisi" },
    { id: 2, ad: "Spor", desc: "Spor ürünleri kategorisi" },
    { id: 3, ad: "Mobilya", desc: "Mobilya ürünleri kategorisi" },
    { id: 4, ad: "Moda", desc: "Moda ürünleri kategorisi" },
    { id: 5, ad: "Ev Aletleri", desc: "Ev Aletleri kategorisi" },
    { id: 6, ad: "Teknoloji", desc: "Teknoloji ürünleri kategorisi" },
    { id: 7, ad: "Ev Dekorasyon", desc: "Ev dekorasyon ürünleri kategorisi" },
    { id: 8, ad: "Giyim", desc: "Giyim ürünleri kategorisi" },
    { id: 9, ad: "Ev Aletleri", desc: "Ev Aletleri kategorisi" },
  ]);

  const [urunler, setUrunler] = useState([
    { id: 0, kategori: "Elektronik", ad: "Laptop", fiyat: 100.00, aciklama: "Bu ürün harika bir özellik sunuyor.", dolarFiyati:  Number('0'), resim: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08478684.png" },
    { id: 1, kategori: "Giyim", ad: "Gömlek", fiyat: 150.00, aciklama: "Özel tasarım ve yüksek kalite.", dolarFiyati: Number('0'), resim: "https://static.ticimax.cloud/5334/uploads/urunresimleri/buyuk/madmext-beyaz-erkek-gomlek-5500-42-ca3.jpg" },
    { id: 2, kategori: "Spor", ad: "Koşu Ayakkabısı", fiyat: 75.50, aciklama: "Hafif ve kullanımı kolay.", dolarFiyati:  Number('0'), resim: "https://contents.mediadecathlon.com/p2269067/k$589ae1c6a6683b2efcda8cd70983a7fb/sq/8605150.jpg?format=auto&f=800x0" },
    { id: 3, kategori: "Mobilya", ad: "Yemek Masası", fiyat: 200.00, aciklama: "Premium malzemelerle üretilmiştir.", dolarFiyati:  Number('0'), resim: "https://www.demontha.com.tr/wp-content/uploads/6223-KD-1.jpg" },
    { id: 4, kategori: "Moda", ad: "Elbise", fiyat: 120.75, aciklama: "Modaya uygun ve şık.", dolarFiyati: Number('0'), resim: "https://www.esergiyim.com.tr/cdn/shop/files/my-dreams-gulistan-prenses-model-tesettur-abiye-elbise-eser-giyim-8.jpg?v=1699428368" },
    { id: 5, kategori: "Ev Aletleri", ad: "Mikrodalga Fırın", fiyat: 90.00, aciklama: "Dayanıklı ve uzun ömürlü.", dolarFiyati:  Number('0'), resim: "https://cdn.akakce.com/z/arcelik/arcelik-md-201-s-20-lt-siyah.jpg" },
    { id: 6, kategori: "Teknoloji", ad: "Akıllı Telefon", fiyat: 180.25, aciklama: "Teknolojik özelliklere sahip.", dolarFiyati:  Number('0'), resim: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87298715/mobile_220_310_png/APPLE-iPhone-13-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Mavi-MLPK3TU-A" },
    { id: 7, kategori: "Ev Dekorasyon", ad: "Çiçek Saksısı", fiyat: 60.50, aciklama: "Ekonomik ve bütçe dostu.", dolarFiyati:  Number('0'), resim: "https://productimages.hepsiburada.net/s/27/375-375/10210006859826.jpg" },
    { id: 8, kategori: "Giyim", ad: "Ceket", fiyat: 130.00, aciklama: "Çeşitli renk seçenekleri mevcut.", dolarFiyati:  Number('0'), resim: "https://www.littlecupjeans.com/i/l/001/0013382_erkek-baski-slim-fit-kapusonlu-siyah-kot-ceket.jpeg" },
    { id: 9, kategori: "Ev Aletleri", ad: "Bulaşık Makinesi", fiyat: 170.50, aciklama: "İşlevsel ve kullanışlı.", dolarFiyati:  Number('0'), resim: "https://shop.miele.com.tr/g-7975-scvi-k2o-xxl-obsw-autodos-bulasik-makinesi-tam-ankastre-bulasik-makineleri-miele-g-7975-sci-6863-23-B.jpg" },
  ]);


  const [seciliUrunler,setSeciliUrunler]=useState([
    
  ]);
  const [resimPath,setResimPath]=useState(null);

  const [yeniUrun,setYeniUrun]=useState({
    id:0,
    ad:"",
    kategori:"",
    fiyat:0,
    aciklama:"",
    dolarFiyati: Number('0'),
    resim:""
    });
  


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

  useEffect(() => {
    const yeniUrunler = urunler.map((urun) => ({
      ...urun,
      dolarFiyati:  Number((urun.fiyat / dolarFiyati).toFixed(2)),
    }));
    
    setUrunler(yeniUrunler);
    
    console.log(typeof(urunler[0].dolarFiyati));
    console.log(yeniUrun.dolarFiyati);
  }, [dolarFiyati]);



  const removeFromCart = (urunId) => {
    const yeniSepet = seciliUrunler.filter((urun) => urun.id !== urunId);
    setSeciliUrunler(yeniSepet);
  };



  const sepeteEkle=(urun)=>{

    setSeciliUrunler([...seciliUrunler,urun]);

  }

  const onaylaSepet = () => {
    // Sepeti onaylama işlemleri
  };

  const bosaltSepet = () => {

    setSeciliUrunler([]);
  };

  const urunEkle=()=>{
        
    console.log(yeniUrun.id);
    setUrunler([...urunler,yeniUrun]);
        
    setYeniUrun({
      id:0,
    ad:"",
    kategori:"",
    fiyat:0.0,
    aciklama:"",
    dolarFiyati: Number('0'),
    resim:""
    })

  }



  return (
    <div className="App">
      
        <Header seciliUrunler={seciliUrunler} removeFromCart={removeFromCart}  onaylaSepet={onaylaSepet} bosaltSepet={bosaltSepet}/>
        <div className='row ms-0 me-0'>
        <div className='col-md-1'></div>
        <Kategoriler urunler={urunler} kategoriler={kategoriler} dolarFiyati={dolarFiyati}  urunEkle={urunEkle} yeniUrun={yeniUrun} resimPath={resimPath} setResimPath={setResimPath} setYeniUrun={setYeniUrun}/>
        
        <Urunler urunler={urunler} sepeteEkle={sepeteEkle}/>
        </div>
        

    </div>
  );
}

export default App;
