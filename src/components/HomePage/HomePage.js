import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Restaurants from '../Restaurants/Restaurants';
import SearchInput from '../SearchInput/SearchInput';
import SearchList from '../SearchList/SearchList';

const HomePage = () => {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Banner />
      <section className="restaurants">
        <SearchInput value={search} onChange={handleChange}/>
        {search 
          ? <SearchList value={search} />
          : <Restaurants />
        }
      </section>
      
    </>
  )
}

export default HomePage;