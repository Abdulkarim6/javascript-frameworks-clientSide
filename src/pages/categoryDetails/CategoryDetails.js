import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CategoryDetails.css'

const CategoryDetails = () => {
    const categoryNews = useLoaderData();
    const { id, title, image_url, details } = categoryNews;
    console.log(categoryNews);
    return (
        <div className='categoryDetails'>
            <img style={{ height: '200px', display: 'block', borderRadius : '5px' }} src={image_url} alt="" />
            <h2>Course Name : {title}</h2>
            <span>{details}</span>
        </div>
    );
};

export default CategoryDetails;