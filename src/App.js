// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes';

function App() {
  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:5000/categories')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCategories(data)
  //       console.log(data)
  //     })
  // }, [])

  return (
    <div >
      {/* <h1>frameworks have total category : {categories.length}</h1>
      {
        categories.map(category => <p key={category.id}>{category.name}</p> )
      } */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
