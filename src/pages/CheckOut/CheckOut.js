import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const categoryCourse = useLoaderData();
    const {name, price } = categoryCourse;

    return (
        <div className='checkCart'>
            <h2>congratulation to visiting our Website</h2>
            <h3>Are you interested in purchasing our course?</h3>
            <div className='checkoutPaid'>
                <h2>Course : {name}</h2>
                <h4>Price : {price}</h4>
                <Button className='mt-2' variant="primary">Enroll now</Button>
                 <Link to='/'><Button className='mt-2 ms-3' variant="primary">See Courses</Button></Link>
            </div>
        </div>
    );
};

export default CheckOut;