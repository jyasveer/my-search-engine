import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './SearchBox.css';

const SearchBox = ({ onChangeHandler, searchTerm }) => {
  return (
    <div className="input-area">
      <SearchIcon />
      <input
        value={searchTerm}
        onChange={onChangeHandler}
      />
      <MicIcon />
    </div>
  );
};

export default SearchBox;