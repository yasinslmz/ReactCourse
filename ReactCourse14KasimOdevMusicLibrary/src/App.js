import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Navi from './Navi';
import Category from './Category';
import Albums from './Albums';
import { Component } from 'react';

export default class App extends Component {

  //! Define States
  state = {
    stableCategory: "",
    albums: [],
    cart: [],
  };

  //! Category change function has defined.
  //! Category names will be at category array. 
  //! when you click category related albums is listing.
  changeCategory = (category) => {
    this.setState({ stableCategory: category.categoryName });
    this.getAlbums(category.id);
  };

  //! Get album cards according to related categoryID from 
  //! album array in dbjson
  getAlbums = (categoryID) => {
    let url = "http://localhost:3000/albums";
    if (categoryID) {
      url += "?categoryID=" + categoryID;
    }

    //! this is how we call album array from db json
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ albums: data }));
  };

  componentDidMount() {
    this.getAlbums();
  };

  //! add to Cart on navi Function
  addToCart = (album) => {
    let newCart = this.state.cart
    //! if you want to add same album twice, it will increase 
    //! quantity of related album (filter in albums array for id name).
    var addedItem = newCart.find((e) => e.album.id === album.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      //! we defined quantity in here which will display in cart
      newCart.push({ album: album, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  //! remove selected item in cart
  removeToCart = (album) => {
    let newCart = this.state.cart.filter((e) => e.album.id !== album.id)
    this.setState({ cart: newCart });
  };

  //! Clear all items in cart
  clearCart = () => {
    this.setState({ cart: [] })
  }

  calculateCartTotal = () => {
    let total = 0;
    for (const cartItem of this.state.cart) {
      total += cartItem.album.price * cartItem.quantity; 
    }
    return total;
  };



  render() {
    return (
      <div>
        <Navi
          fluid cart={this.state.cart}
          removeToCart={this.removeToCart}
          clearCart={this.clearCart}
          calculateCartTotal={this.calculateCartTotal}
        />

        <Container className="bg-light"
          fluid >

          <Row>
            <Col xs="3" className='mt-5 ps-3'>
              <Category
                changeCategory={this.changeCategory}
                stableCategory={this.state.stableCategory}
              />

            </Col>
            <Col xs="9" className='mt-5 pe-3'>
              <Albums
                addToCart={this.addToCart}
                albums={this.state.albums}
                //! need to display category name as a header 
                //! at top of albums page 
                stableCategory={this.state.stableCategory}
              />
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}


