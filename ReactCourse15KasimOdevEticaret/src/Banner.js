import React, { Component } from 'react'

export default class Banner  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerProducts: [],
            error: null,
        };
    }

    handleCategoryClick = (kategoriId) => {
        console.log('Seçilen kategori:', kategoriId);
        this.props.kategoriSec(kategoriId);
    };

    componentDidMount() {
        fetch('http://localhost:3000/urunler')
            .then(response => response.json())
            .then(data => {
                
                if (data) {
                    const bannerProducts = data.filter(product => product.banner === 1);
                    this.setState({bannerProducts: bannerProducts});
                    
                    
                } else {
                    this.setState({error: 'API verisi beklenen formatta değil'});
                }
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
                this.setState({error: 'Veri çekme hatası'});
            });
    }

  render() {

    
    return (
      

        <div class="main-banner" id="top">
           
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">

                {
                    this.state.bannerProducts.length>0 && (
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>We Are Yasin Shop</h4>
                                <span>Harika, Temiz &amp; Yaratıcı </span>
                                <div class="main-border-button">
                                    <a href="#">Satın Al!</a>
                                </div>
                            </div>
                            <img src={this.state.bannerProducts[1].resim} onClick={()=>this.handleCategoryClick(this.state.bannerProducts[1].kategoriId)} alt="" height={"700"}/>
                        </div>
                    )
                }

                        
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                {
                                    this.state.bannerProducts.length>0 && (
                                        <div class="thumb">
                                        <div class="inner-content">
                                            <h4>{this.state.bannerProducts[0].ad} </h4>
                                            
                                        </div>
                                       
                                        <img src={this.state.bannerProducts[0].resim} onClick={()=>this.handleCategoryClick(this.state.bannerProducts[0].kategoriId)}  height={"350"}/>
                                    </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                {
                                    this.state.bannerProducts.length>0 && (
                                        <div class="thumb">
                                        <div class="inner-content">
                                            <h4>{this.state.bannerProducts[4].ad}</h4>
                                            
                                        </div>
                                       
                                        <img src={this.state.bannerProducts[4].resim}   onClick={()=>this.handleCategoryClick(this.state.bannerProducts[4].kategoriId)} height={"350"}/>
                                    </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                {
                                    this.state.bannerProducts.length>0 && (
                                        <div class="thumb">
                                        <div class="inner-content">
                                            <h4>{this.state.bannerProducts[3].ad}</h4>
                                            
                                        </div>
                                       
                                        <img src={this.state.bannerProducts[3].resim}   height={"320"} onClick={()=>this.handleCategoryClick(this.state.bannerProducts[3].kategoriId)}/>
                                    </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                {
                                    this.state.bannerProducts.length>0 && (
                                        <div class="thumb">
                                        <div class="inner-content">
                                            <h4>{this.state.bannerProducts[2].ad}</h4>
                                            
                                        </div>
                                       
                                        <img src={this.state.bannerProducts[2].resim}   onClick={()=>this.handleCategoryClick(this.state.bannerProducts[2].kategoriId)} height={"320"}/>
                                    </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


      
    )
  }
}
