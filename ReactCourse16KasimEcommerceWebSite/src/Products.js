import React, { Component } from 'react'

export default class Products extends Component {


    constructor(props){
        
        super(props);
        this.state={
            selectedProducts:[],
            allProducts:[],
            modalProduct:null,
            showModal:false,
            error: null
        }
        

    }


    componentDidMount(){
        this.fetchAllProducts();
        this.fetchBlogs();
    }

    componentDidUpdate(prevProps){

       
            if (prevProps.seciliKategori !== this.props.seciliKategori) {
                this.fetchBlogs();
                
            }
            
      

        


    }


    fetchBlogs() {

        const apiUrl = this.props.seciliKategori
            ? `http://localhost:3000/urunler?kategoriId=${this.props.seciliKategori}`
            : 'http://localhost:3000/urunler';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // console.log('Gelen veri:', data);
               
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
    fetchAllProducts() {
        const apiUrl = 'http://localhost:3000/urunler';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              this.setState({ allProducts: data });
            } else {
              this.setState({ error: 'API verisi beklenen formatta değil' });
            }
          })
          .catch((error) => {
            console.error('Tüm ürünleri çekme hatası:', error);
            this.setState({ error: 'Tüm ürünleri çekme hatası' });
          });
      }

    favoriEkle = (seciliUrun) => {
        const { selectedProducts } = this.state;
        
        if (seciliUrun) {
          const productId = seciliUrun.id;
          const apiUrl = `http://localhost:3000/urunler/${productId}`;
          
          fetch(apiUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...seciliUrun,
              favoriSayisi: seciliUrun.favoriSayisi + 1,
            }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Favori sayısı artırıldı:', data);
            // İşlem başarıyla tamamlandıktan sonra state'i güncelleyebilirsiniz.
            const updatedProducts = this.state.allProducts.map(product => {
              if (product.id === productId) {
                return {
                  ...product,
                  favoriSayisi: seciliUrun.favoriSayisi + 1,
                };
              }
              return product;
            });
      
            this.setState({
              allProducts: updatedProducts,
            });
            this.setState({showModal:false})
          })
          .catch(error => {
            console.error('Favori sayısı artırma hatası:', error);
          });
        }
      }



  render() {
    return (
      <div>
        

            <section class="section mt-2" id="men">

                <div className='row m-0 ps-0' width={"100%!important"} style={{margin:'0!important',width:'100%!important'}}>
                    <div className='col-md-1'></div>
                    <div class="row col-md-7 ps-0 mt-4">

                        {
                            this.state.selectedProducts.map(product => (
                                <div className="col-lg-4 me-5 rounded" style={{ width: '18rem',maxHeight:'600px', border: 'none!important', padding: '0 20px 0 20px'}}>
                                    <img src={product.resim} className="card-img-top " alt="Product" height={"400"} />
                                    <div className="card-body ">
                                        <h5 className="card-title"><strong>{product.ad}</strong></h5>

                                        <p className="card-text">Fiyat: {product.fiyat} TL</p>
                                        <a href="#" className="btn btn-info mt-1" onClick={() => this.props.sepeteEkle(product)}>Sepete Ekle</a>


                                    </div>
                                </div>
                            ))
                        }


                    </div>
                    <div class="col-md-4" style={{marginTop:'-65px'}}>

                        <h2><em>Favori Ürünler</em></h2>
                        <hr />
                        <div className='col-md-12 mt-3'>

                            {
                                this.state.allProducts.length > 0 && (
                                    this.state.allProducts
                                        .sort((a, b) => b.favoriSayisi - a.favoriSayisi) // Favori sayısına göre sırala
                                        .slice(0, 5) // İlk 5 ürünü al
                                        .map((product) => (
                                            <div className='row'>
                                                <div className='col-md-4 px-0' onClick={() => this.setState({ showModal: true,modalProduct:product })}>
                                                    <img src={product.resim} className=' rounded pt-2' alt='Product' height={'200'} width={'100%'} />
                                                </div>
                                                <div className='col-md-6' style={{ textAlign: 'start' }}>
                                                    <h5 className=''>
                                                        <strong>{product.ad}</strong>
                                                    </h5>
                                                    <p className=''>Fiyat: {product.fiyat} TL</p>
                                                    <p>
                                                        <span>Favori Sayısı: {product.favoriSayisi}</span>
                                                    </p>
                                                    <a href='#' className='btn btn-info mt-1' onClick={() => this.props.sepeteEkle(product)}>
                                                        Sepete Ekle
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                )
                            }

                    </div>



                    </div>
                    </div>
                

                    
                
                {
                    this.state.showModal &&(
                        <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close " style={{textAlign:'end'}} id="closeModalBtn" onClick={()=>this.setState({showModal:false})}>&times;</span>
                            
                            {
                                this.state.modalProduct && (
                                    <div className='row'>


                                        <div className='col-md-4 px-0'>
                                            <img src={this.state.modalProduct.resim} className="" alt="Product" height={"200"} width={"100%"}/>

                                        </div>
                                        <div className='col-md-6 ' style={{textAlign:'start'}}>
                                            <h5 className=""><strong>{this.state.modalProduct.ad}</strong></h5>
                                            <p className="">Fiyat: {this.state.modalProduct.fiyat} TL</p>
                                            <p><span>Favori Sayısı: {this.state.modalProduct.favoriSayisi}</span></p>
                                            <a href="#" className="btn btn-danger mt-1" onClick={() => this.favoriEkle(this.state.modalProduct)}>Favori Ekle</a>
                                            <br />
                                            <a href="#" className="btn btn-info mt-1" onClick={() => {this.setState({showModal:false});
                                                this.props.sepeteEkle(this.state.modalProduct);
                                                                                                    
                                            }}>Sepete Ekle</a>
                                            

                                        </div>
                                    </div>

                            )
                             
                        }



                        </div>
                        </div>

                    )
                }
           
           
           
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
