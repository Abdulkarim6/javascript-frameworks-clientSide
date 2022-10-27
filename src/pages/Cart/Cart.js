import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    const { title, details, image_url, id } = cart;
    return (
        <Card className='cart'>
            <Card.Img className='img' variant="top" src={image_url} />
            <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>{title}</Card.Title>
                <Link to={`/category/${id}`}>
                    <Button variant="primary">Details </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Cart;