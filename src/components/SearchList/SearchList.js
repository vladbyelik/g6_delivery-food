import React, { useEffect, useState } from 'react';
import firebase from '../../utils/fb-config';
import ProductCard from '../ProductCard/ProductCard';

const SearchList = ({ value }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    firebase
      .database()
      .ref()
      .once('value')
      .then(data => setData(data.val()))
  } , []);

  const allData = data && Object.values(data)
                          .map(product => product.data)
                          .filter(Boolean)
                          .flat(Infinity)
                          .filter(product => product.name.toUpperCase().includes(value.toUpperCase()))

  const isData = allData && allData.length > 0;

  return (
    <div className='cards cards-menu'>
      {isData 
        ? allData?.map(card => {
            return <ProductCard key={card.id} {...card}/>
          })
        : <h2>К сожалению товар не найден</h2>
      }
    </div>
  )
}

export default SearchList;