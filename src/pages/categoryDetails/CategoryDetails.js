import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CategoryDetails.css';
import { FaFileDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import  Button  from 'react-bootstrap/Button';

const ref = React.createRef();

const CategoryDetails = () => {
    const categoryNews = useLoaderData();
    const { id, title, image_url, details } = categoryNews;
    console.log(categoryNews);

   const handlePremiumAccess = () => {
    console.log('clicked');
   }

    return (
        <div className='categoryDetails'>
            <div className='d-flex justify-content-end m-2'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download PDF<FaFileDownload className='ms-2'></FaFileDownload></button>}
                </Pdf>
            </div>
            <div>
                <img style={{ height: '200px', display: 'block', borderRadius: '5px' }} src={image_url} alt="" />
                <div ref={ref}>
                    <h2>Course Name : {title}</h2>
                    <span>{details}</span>
                </div>
            </div>
            <Button onClick={handlePremiumAccess} className='mt-3'>Get Premium access</Button>
        </div>
    );
};

export default CategoryDetails;