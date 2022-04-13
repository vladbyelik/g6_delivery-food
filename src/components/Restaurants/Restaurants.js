import React from 'react';
import usePageData from '../../custom-hooks/usePageData';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Spinner from '../Spinner/Spinner';

const Restaurants = () => {

  const restaurantsList = usePageData('partners');

  return (
    <div className="restaurants__cards cards">
      {restaurantsList 
        ? restaurantsList.length 
            ? restaurantsList.map(item => {
                return <RestaurantCard key={item.image} {...item}/>
              })
            : <h3>(no items)</h3>
        : <Spinner />}
    </div>
  )
}

export default Restaurants;