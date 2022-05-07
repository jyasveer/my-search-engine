import React, { useContext } from 'react';
import useGoogleSearchApi from '../../common/hooks/useGoogleSearchApi';
import { SearchBox } from '../../components';
import SearchPageButtons from '../../components/search-page-buttons/SearchPageButtons';
import { AppContext } from '../../state/StateProvider';
import './Search.css';

const Search = () => {

  const appContext = useContext(AppContext);

  const { searchTerm, updateSearchTerm } = appContext;

  const searchButtonHandler = (event) => {
    event.preventDefault();
    updateSearchTerm(searchTerm);
  };

  const inputChangeHandler = (event) => {
    updateSearchTerm(event.target.value);
  };

  const searchResults = useGoogleSearchApi(searchTerm);

  console.log(searchResults);

  const getSearchResultsInfoElement = () => {
    if (searchResults?.data?.items) {
      return (
        <>
          About {searchResults?.data?.searchInformation?.formattedTotalResults} results
          ({searchResults?.data?.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
        </>
      );
    } else {
      return <></>;
    }
  }

  const getSearchResultsElementList = () => {
    if (searchResults?.data?.items) {
      return (
        <>
          {searchResults.data.items.map((item, index) => {

            const thumbnailSrc = item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src;
            console.log(thumbnailSrc);

            return (
              <div className='search-results-item' key={index}>
                <a
                  href={item.link}
                  target='_blank'
                  rel="noreferrer"
                  className='search-results-item-first-line'>
                  {thumbnailSrc && <img src={thumbnailSrc} alt='no-img' />}
                  {item.displayLink}
                </a>
                <a
                  className="search-results-item-second-line"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer">
                  <h3>{item.title}</h3>
                </a>
                <p className="search-results-item-third-line">
                  {item.snippet}
                </p>
              </div>
            );
          })}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className='search-page'>
      <div className='search-page-left-section'>
        <a href='/'>
          <img
            className='logo-img'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt="no-img" />
        </a>
      </div>
      <div className='search-page-right-section'>
        <form className='search-box-section'>
          <SearchBox onChangeHandler={inputChangeHandler} searchTerm={searchTerm} />
          <SearchPageButtons />
          <button onClick={searchButtonHandler}></button>
        </form>
        <div className='search-results-section'>
          <div className='-search-results-info'>
            {getSearchResultsInfoElement()}
          </div>
          <div className='search-results-list'>
            {getSearchResultsElementList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;