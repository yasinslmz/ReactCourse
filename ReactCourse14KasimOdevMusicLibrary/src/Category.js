import React, { Component } from 'react';
import './category.css';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';


export default class Category extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div >
        <h3 className='mb-4 '>
          Category{' '}
        </h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
            active={
              category.categoryName===this.props.stableCategory
              ? true
              :false
            }
             onClick={()=>this.props.changeCategory(category)}
             key={category.id}

            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>

    )
  }
}
