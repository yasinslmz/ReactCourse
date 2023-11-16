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
   
    
  }

  render() {

    

    return (
      <div className="App">
      <Header kategoriSec={this.kategoriSec}/>
      <Banner/>
      <Products seciliKategori={this.state.seciliKategori}/>

    </div>
    )
  }
}
