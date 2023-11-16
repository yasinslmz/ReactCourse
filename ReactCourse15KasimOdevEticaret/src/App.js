import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Products from './Products';


import React, { Component } from 'react'

export default class App extends Component {


  constructor(props){
    super(props);
    this.state={
      seciliKategori:null
    }
  }


  kategoriSec =(kategoriId)=>{

    this.setState({seciliKategori:kategoriId});
    console.log(kategoriId);
    
  }
  componentDidUpdate(prevProps, prevState) {
    // Eğer state değiştiyse ve güncellenen state seciliKategori ise,
    // Products bileşenine güncel kategoriyi iletiyoruz.
    
      console.log('Güncel kategori:', this.state.seciliKategori);
   
  }

  
  render() {
   
    

    return (
      <div className="App">
      <Header kategoriSec={this.kategoriSec}/>
      <Banner kategoriSec={this.kategoriSec}/>
      <Products seciliKategori={this.state.seciliKategori} />

    </div>
    )
  }
}
