import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            kategoriler:[],
           
        }

    }


    componentDidMount(){
        fetch("http://localhost:3000/kategoriler")
        .then(response=> response.json())
        .then(data=>{this.setState({kategoriler:data});
       
        })
    }

    handleCategoryClick = (kategoriId) => {
        console.log('Seçilen kategori:', kategoriId);
        this.props.kategoriSec(kategoriId);
    };


  render() {

   

    return (
      <div>
        
    
   
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                      
                        <a href="index.html" class="logo">
                            <img src="assets/images/logo.png" height={"80"} />
                        </a> 
                     
                        <ul class="nav">
                            {
                                this.state.kategoriler.map(kategori=>(<li class="scroll-to-section"><a href="" onClick={()=>this.handleCategoryClick(kategori.id)}>{kategori.ad}</a></li>))
                            }
                            
                            <li class="submenu">
                                <a href="javascript:;">Sayfalar</a>
                                <ul>
                                    <li><a href="about.html">Hakkımızda</a></li>
                                    <li><a href="products.html">Ürünler</a></li>
                                  
                                    <li><a href="contact.html">İletişim</a></li>
                                </ul>
                            </li>
                            
                            <li class="scroll-to-section"><a href="#explore">Explore</a></li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                      
                    </nav>
                </div>
            </div>
        </div>
    </header>
  
   
   
  
   


      </div>
    )
  }
}
