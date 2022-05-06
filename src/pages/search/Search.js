import React, { useContext } from 'react';
import useGoogleSearchApi from '../../common/hooks/useGoogleSearchApi';
import { AppContext } from '../../state/StateProvider';

const Search = () => {

  const appContext = useContext(AppContext);
  console.log(appContext);

  const searchResults = useGoogleSearchApi(appContext.searchTerm);
  console.log(searchResults);
  return (<span>Search page</span>);
};

export default Search;