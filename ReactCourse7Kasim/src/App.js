import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import logo2 from './logo192.png'; 



function App() {

 

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#" style={{ marginLeft: '150px' }}>
            <img src={logo2} width="80"></img>
          </a>
        
        <div class="navbar-collapse justify-content-end" style={{ marginRight: '150px' }}>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Hakkımızda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Çalışmalar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">İletişim</a>
            </li>
          </ul>
        </div>
  </nav>

  <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="kategori">
        <a href=''>Gömlek</a>
      </div>
      <div class="kategori">
          <a href=''>Tişört</a>
      </div>
      <div class="kategori">
          <a href=''>Pantalon</a>
      </div>
      <div class="kategori">
          <a href=''>Ceket</a>
      </div>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-4">
          <div class="kart">
            <img src=""/>
            <h4>Ürün 1</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kart">
            <img src="" />
            <h4>Ürün 2</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kart">
            <img src="" />
            <h4>Ürün 3</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kart">
            <img src=""/>
            <h4>Ürün 4</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kart">
            <img src="" />
            <h4>Ürün 5</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kart">
            <img src=""/>
            <h4>Ürün 6</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>







    </div>
  );
}

export default App;
