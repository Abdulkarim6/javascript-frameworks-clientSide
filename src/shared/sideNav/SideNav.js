import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://javascript-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='sideNav'>
            <h2>Our Courses</h2>
            {
                categories.map(category => <p key={category.id}><Link 
                    to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default SideNav;