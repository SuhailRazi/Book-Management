import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Books = () => {

  const [books,setBooks] = useState([0])

  useEffect(()=>{
      const fetchAll = async () =>{
        try {
          const res = await axios.get("http://localhost:8800/books");
          setBooks(res.data)
        }catch(err){
          console.log('error',err);
        }
      }
      fetchAll();
  },[])

  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload();
    }catch(err){
      console.log(err);
    }

  }

  

  return (
    <div>
      <h1>Book Shop</h1>
        <div className="books">
          { books ? books.map((book)=>(
            <div className="book" key={book.id}>
             {book.cover && <img src={book.cover} alt=''  /> } 
             <h2>{book.title}</h2>
             <p>{book.description}</p>
            <span>{book.price}</span><br/>
            <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button><br/>
            <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>

            </div>
          ))

           : " Data not found"}
        </div>
        <button>
          <Link to='/add'>Add new Book</Link>
        </button>
    </div>
  )
}

export default Books
