import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Indexpage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className='grid grid-cols-2  gap-y-8 gap-x-6 md:grid-cols-3 lg:grid-cols-4 mt-8'>
      {places.length > 0 &&
        places.map((place) => (
          <Link key={place._id} to={"/place/" + place._id}>
            <div className='bg-gray-500 rounded-2xl mb-2  flex'>
              {place.photos?.[0] && (
                <img
                  className='rounded-2xl object-cover aspect-square'
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=''
                />
              )}
            </div>
            <h2 className='font-bold '>{place.title}</h2>
            <h3 className='text-sm text-gray-500'>{place.address}</h3>
            <div className='mt-1 '>
              <span className='font-bold'>${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
