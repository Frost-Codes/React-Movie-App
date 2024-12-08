import React, { useState } from 'react';

import SearchIcon from '../assets/search.svg';

const SearchBox = ({searchFunction}) => {

const [searchTerm, setSerchTerm] = useState('');

  return (
    <div className='search'>
        <input type="text" placeholder='Search for movies' value={searchTerm} onChange={ () => {
            setSerchTerm(event.target.value);
        }}/>
        <img src={SearchIcon} alt="Search" onClick={ () => {
            searchFunction(searchTerm);
        }}/>
    </div>
  )
}

export default SearchBox
