import React, { useState, useEffect } from 'react';
import Card from './Card';
import getFlats from '../api/get-flats';
import Preloader from './preloader';

const CardList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [flats, setFlats] = useState([]);

  useEffect (() => {
    getFlats()
      .then(flats => {
        setFlats(flats);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {flats.length > 0 &&
        <section className="cards" style={isLoading ? {display: 'flex'} : {display:'grid'}}>
          {isLoading ? 
            <Preloader />
            :
            flats.map(flat => <Card flat={flat} key={flat.id}/>)
          }
        </section>
      }
    </>
  );
};

export default CardList;