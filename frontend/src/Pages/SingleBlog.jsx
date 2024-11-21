import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SingleBlog() {
  const [photo, setphote]  = useState(null);

  const {id} = useParams();

  
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => setphote(res.data))
    .catch(error => {
      console.error(error);
    });

  },[id])

  return (
    <div className='container pb-12'>
        {photo ? 
          (
            <>
              <div className='grid grid-cols-2 py-5'>
                <h1 className='mb-3'>{photo.id} ,{photo.title}</h1>
                <img src={photo.url} alt={photo.title} className='rounded-lg shadow-2xl shadow-sky-200' />
              </div>
              <Link to={`../blog/${parseInt(id) >1? parseInt(id)-1: 10 }`} className="btn">prev</Link>
              <Link to={`../blog/${parseInt(id) <10? parseInt(id)+1: 1 }`} className="btn">next</Link>
            </>
          )
        
        : 
        (
          <div className='text-center'>
            <span className='animate-spin	inline-block border-4 rounded-full border-slate-300 spin- h-10 w-10 border-t-sky-600'></span>
            <br />
            Loading...
          </div>
        )
        }
          
    </div>
  )
}
