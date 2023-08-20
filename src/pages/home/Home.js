import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div>
            <h2 className='titel'>Welcome to our Courses</h2>
            <div className='categories'>
            {
                categories.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>

        </div>
    );
};

export default Home;