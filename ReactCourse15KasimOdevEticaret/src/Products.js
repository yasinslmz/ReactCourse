import React, { Component } from 'react'

export default class Products extends Component {


    constructor(props){
        
        super(props);
        this.state={
            selectedProducts:[],
            error: null
        }
        

    }


    componentDidMount(){
        this.fetchBlogs();
    }

    componentDidUpdate(prevProps){

        if (prevProps.seciliKategori !== this.props.seciliKategori) {
            this.fetchBlogs();
            console.log("hello");
        }


    }


    fetchBlogs() {

        const apiUrl = this.props.seciliKategori
            ? `http://localhost:3000/urunler?kategoriId=${this.props.seciliKategori}`
            : 'http://localhost:3000/urunler';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Gelen veri:', data);
                console.log(this.props.seciliKategori);
                if (data) {
                    this.setState({selectedProducts: data});
                } else {
                    this.setState({error: 'API verisi beklenen formatta değil'});
                }
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
                this.setState({error: 'Veri çekme hatası'});
            });
    }



  render() {
    return (
      <div>
        

            <section class="section" id="men">


                <div class="container">
                    <div class="row">

                        {
                            this.state.selectedProducts.map(product=>(
                                <div className="card col-lg-4 me-3 "style={{ width: '18rem', border: 'none!important',padding:'0',marginRight:'15px!important' }}>
                                <img src={product.resim} className="card-img-top " alt="Product" height={"400"}/>
                                <div className="card-body ">
                                    <h5 className="card-title"><strong>{product.ad}</strong></h5>
    
                                    <p className="card-text">Fiyat: {product.fiyat} TL</p>
    
                                </div>
                            </div>
                            ))
                        }

                        
                    </div>
                </div>

            </section>

    {/* <section class="section" id="men">

        



        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h2>Men's Latest</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
   
    
   
    <section class="section" id="explore">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        
                    </div>
                </div>
            </div>
        </div>
    </section> */}
   
    <section class="section" id="social">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <h2>Social Media</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row images">
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Fashion</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-01.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>New</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-02.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>br/and</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-03.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Makeup</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-04.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Leather</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-05.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Bag</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-06.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
         
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            <img src="assets/images/logo.png" height={"80"} alt="hexashop ecommerce templatemo" className='rounded'/>
                        </div>
                        <ul>
                            <li><a href="#">Istanbul/Turkey</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>Shopping &amp; Categories</h4>
                    <ul>
                        <li><a href="#">Erkek</a></li>
                        <li><a href="#">Kadın</a></li>
                        <li><a href="#">Çocuk</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Faydalı Linkler</h4>
                    <ul>
                        <li><a href="#">Anasayfa</a></li>
                        <li><a href="#">Hakkımızda</a></li>
                        <li><a href="#">Yardım</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </div>
               
                <div class="col-lg-12">
                    <div class="under-footer">
                        <p>Copyright © 2022 Yasin Çağrı Solmaz 
                        
                        <br/> </p>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>


      </div>
    )
  }
}
