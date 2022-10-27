import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h2>this is side nav</h2>
            <h5>frameworks have total category : {categories.length}</h5>
            {
                categories.map(category => <p key={category.id}><Link 
                    to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default SideNav;