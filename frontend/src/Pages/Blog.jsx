import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Blog() {
  
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    // async function getData(){
    //   const api = await fetch('https://jsonplaceholder.typicode.com/photos');
    //   const data = await api.json();
    //   setPhotos(data.slice(0, 10));
    // }
    // getData();
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => setPhotos(res.data.slice(0,10)))
    .catch(error => {
      console.error(error);
    });

  },[])
  console.log(photos);
  return (
    <section className="py-10 px-5 pb-20">
      <ul className="grid grid-cols-5 gap-5">
        
        {photos ? photos.map(ps=> 
          <li className="border rounded-lg overflow-hidden" key={ps.id}>
              <Link to={`../blog/${ps.id}`}>
                <img src={ps.url} alt={ps.title} />
              </Link>
            
            <div className="p-3">
              <h3>{ps.title}</h3>

            </div>
          </li>)
          :
        ("Loading...")
        }

      </ul>
    </section>
  )
}
