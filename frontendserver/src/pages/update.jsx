import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBooks = () => {

  const [book,setBooks] = useState({
      title: "",
      description: "",
      price : "",
      cover : ""
  });
  const navigate = useNavigate();
  const location = useLocation();
  const id =  location.pathname.split('/')[2]
  
  console.log(location.pathname.split('/')[2]);

  const handleChange = (e) =>{
      setBooks((prev) => ({...prev, [e.target.name] : [e.target.value] }));
  };

  console.log(book);

  const handleClick = async (e) =>{
      e.preventDefault();
      try{
          await axios.put("http://localhost:8800/books/"+id,book);
          navigate("/books");
      }catch(err){
          console.log(err);
      }

  }


return (
  <div className='form'>
    <h1>Update Book</h1>
    <input type='text' placeholder='title' onChange={handleChange} name='title'/>
    <input type='text' placeholder='description' onChange={handleChange} name='description'/>
    <input type="number" placeholder='price' onChange={handleChange} name='price'/>
    <input type="text" placeholder='cover page' onChange={handleChange}  name='cover'/>

    <button className='formbtn' onClick={handleClick}>Update</button>
  </div>
)
}

export default UpdateBooks