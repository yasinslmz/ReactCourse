import React, { Component } from 'react';
import './album.css';
import {
    CardText,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from 'reactstrap';

export default class Albums extends Component {
    render() {
        const { albums } = this.props;
        return (

            <Row>
                <h2>{this.props.stableCategory}</h2>
                {albums.map((album) => (
                    <Col xs="4" className='mb-4'key={album.id} >

                        <Card >
                            <Card className='card-img'>
                                <CardImg
                                    alt={album.albumName}
                                    src={album.image}
                                    top
                                    width="100%"
                                    height="100%"
                                />
                            </Card>

                            <CardBody>
                                <CardTitle tag="h5">
                                    {album.albumName}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Album Price:{album.price} $
                                </CardSubtitle>
                                <CardText>
                                    {album.albumdesc}
                                </CardText>
                                <Button onClick={() => this.props.addToCart(album)}>
                                    Add to Cart
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                ))}
            </Row>
        )
    }
}
