import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {

    const [book,setBooks] = useState({
        title: "",
        description: "",
        price : null,
        cover : ""
    });
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setBooks((prev) => ({...prev, [e.target.name] : [e.target.value] }));
    };

    console.log(book);

    const handleClick = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/books",book);
            navigate("/books");
        }catch(err){
            console.log(err);
        }

    }


  return (
    <div className='form'>
      <h1>Add new Book</h1>
      <input type='text' placeholder='title' onChange={handleChange} name='title'/>
      <input type='text' placeholder='description' onChange={handleChange} name='description'/>
      <input type="number" placeholder='price' onChange={handleChange} name='price'/>
      <input type="text" placeholder='cover page' onChange={handleChange}  name='cover'/>

      <button className='formbtn' onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddBooks
