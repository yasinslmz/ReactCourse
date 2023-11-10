import logo from './logo.svg';
import './App.css';
import Header from './header';
import Kategoriler from './kategoriler';
import Urunler from './Urunler';
function App() {

  const kategoriler = [
    { id: 0, ad: "Kategori 1", desc: "hello" },
    { id: 1, ad: "Kategori 2", desc: "world" },
    { id: 2, ad: "Kategori 3", desc: "foo" },
    { id: 3, ad: "Kategori 4", desc: "bar" },
    { id: 4, ad: "Kategori 5", desc: "lorem" },
    { id: 5, ad: "Kategori 6", desc: "ipsum" },
    { id: 6, ad: "Kategori 7", desc: "dolor" },
    { id: 7, ad: "Kategori 8", desc: "sit" },
    { id: 8, ad: "Kategori 9", desc: "amet" },
    { id: 9, ad: "Kategori 10", desc: "consectetur" },
  ];

  const urunler = [
    { id: 0, ad: "Ürün 1", fiyat: 100.00, aciklama: "Bu ürün harika bir özellik sunuyor." },
    { id: 1, ad: "Ürün 2", fiyat: 150.00, aciklama: "Özel tasarım ve yüksek kalite." },
    { id: 2, ad: "Ürün 3", fiyat: 75.50, aciklama: "Hafif ve kullanımı kolay." },
    { id: 3, ad: "Ürün 4", fiyat: 200.00, aciklama: "Premium malzemelerle üretilmiştir." },
    { id: 4, ad: "Ürün 5", fiyat: 120.75, aciklama: "Modaya uygun ve şık." },
    { id: 5, ad: "Ürün 6", fiyat: 90.00, aciklama: "Dayanıklı ve uzun ömürlü." },
    { id: 6, ad: "Ürün 7", fiyat: 180.25, aciklama: "Teknolojik özelliklere sahip." },
    { id: 7, ad: "Ürün 8", fiyat: 60.50, aciklama: "Ekonomik ve bütçe dostu." },
    { id: 8, ad: "Ürün 9", fiyat: 130.00, aciklama: "Çeşitli renk seçenekleri mevcut." },
    { id: 9, ad: "Ürün 10", fiyat: 170.50, aciklama: "İşlevsel ve kullanışlı." },
  ];
  



  return (
    <div className="App">
      
        <Header/>
        <div className='row'>
        <div className='col-md-1'></div>
        <Kategoriler kategoriler={kategoriler}/>
        <Urunler urunler={urunler}/>
        </div>
        

    </div>
  );
}

export default App;
