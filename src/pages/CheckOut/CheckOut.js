import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const categoryCourse = useLoaderData();
    console.log(categoryCourse);
    const { name, price } = categoryCourse;

    return (
        <div className='checkCart'>
            <h2>congratulation to visiting our Website</h2>
            <h3>Are you interested in purchasing our course?</h3>
            <div className='checkoutPaid'>
                <h2>name : {name}</h2>
                <h4>Price : {price}</h4>
            </div>
        </div>
    );
};

export default CheckOut;