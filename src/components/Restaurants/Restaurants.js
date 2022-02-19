import React from 'react';
import usePageData from '../../custom-hooks/usePageData';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Spinner from '../Spinner/Spinner';

const Restaurants = () => {

  const restaurantsList = usePageData('partners');

  console.log(restaurantsList);

  return (
    <section className="restaurants">
      <div className="restaurants__heading">
        <h2 className="restaurants__title">Рестораны</h2>
        <label className="restaurants__search">
          <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
        </label>
      </div>
      <div className="restaurants__cards cards">

        {restaurantsList 
          ? restaurantsList.length 
              ? restaurantsList.map(item => {
                  return <RestaurantCard key={item.image} {...item}/>
                })
              : <h3>(no items)</h3>
          : <Spinner />}

        

      </div>
    </section>
  )
}

export default Restaurants;