import React from "react";
import { Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PinDrop from '@material-ui/icons/PinDrop';
import ImageIcon from '@material-ui/icons/Image';
import Notes from '@material-ui/icons/Notes';
import Videos from '@material-ui/icons/Videocam';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SearchPageButtons.css';

const SearchPageButtons = () => {
  return (
    <div className="search-options">
      <div className='search-option'>
        <SearchIcon /> <Link to='/all'>All</Link>
      </div>
      <div className='search-option'>
        <PinDrop /> <Link to='/maps'>Maps</Link>
      </div>
      <div className='search-option'>
        <Notes /> <Link to='/news'>News</Link>
      </div>
      <div className='search-option'>
        <ImageIcon /> <Link to='/images'>Images</Link>
      </div>
      <div className='search-option'>
        <Videos /> <Link to='/videos'>Videos</Link>
      </div>
      <div className='search-option'>
        <MoreVertIcon /> <Link to='/more'>More</Link>
      </div>
    </div>
  );
};

export default SearchPageButtons;