import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import './SearchBox.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchButtonHandler = (event) => {
    event.preventDefault();

    setSearchTerm('');
  };

  const inputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search-box">
      <div className="input-area">
        <SearchIcon />
        <input
          value={searchTerm}
          onChange={inputChangeHandler}
        />
        <MicIcon />
      </div>
      <div className="button-area">
        <Button type="submit" onClick={searchButtonHandler} variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchBox;