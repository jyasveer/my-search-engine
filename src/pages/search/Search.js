import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGoogleSearchApi from '../../common/hooks/useGoogleSearchApi';
import { SearchBox } from '../../components';
import SearchPageButtons from '../../components/search-page-buttons/SearchPageButtons';
import { AppContext } from '../../state/StateProvider';
import './Search.css';

const Search = () => {

  const appContext = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const searchButtonHandler = (event) => {
    event.preventDefault();
    appContext.updateSearchTerm(searchTerm);
    // navigate('/search');
  };

  const inputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchResults = useGoogleSearchApi(appContext.searchTerm);

  console.log(searchTerm);
  console.log(appContext);
  console.log(searchResults);

  return (
    <div className='search-page'>
      <div className='search-page-top-section'>
        <div className='logo-section'>
          <a href='/'>
            <img
              className='logo-img'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="no-img" />
          </a>
        </div>
        <form className='search-box-section'>
          <SearchBox onChangeHandler={inputChangeHandler} />
          <SearchPageButtons searchButtonHandler={searchButtonHandler} />
        </form>
      </div>
      <div className='search-results-section'>
        {searchResults &&
          searchResults.data &&
          searchResults.data.items &&
          searchResults.data.items.map(item => (<div key={item.title}>{item.title}</div>))}
      </div>
    </div>
  );
};

export default Search;