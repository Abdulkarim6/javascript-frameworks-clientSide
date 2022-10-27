import React from 'react';
import { useLoaderData } from 'react-router-dom'

const CategoryDetails = () => {
    const categoryNews = useLoaderData();
    const {id,title, image_url, details} = categoryNews;
    console.log(categoryNews);
    return (
        <div>
            <h1>this is Category Details page : {categoryNews.length}</h1>
            <h2>title : {title}</h2>
            <img style={{ height: '200px', backgroundColor : 'red', padding:'10px', display:'block'}} src={image_url} alt="" />
            <span>{details}</span>
        </div>
    );
};

export default CategoryDetails;