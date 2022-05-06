import React from "react";
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PinDrop from '@material-ui/icons/PinDrop';
import ImageIcon from '@material-ui/icons/Image';
import Notes from '@material-ui/icons/Notes';
import Videos from '@material-ui/icons/Videocam';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SearchPageButtons.css';

const SearchPageButtons = ({ searchButtonHandler }) => {
  return (
    <div className="search-button-area">
      <Button type="submit" onClick={searchButtonHandler}>
        <SearchIcon /> All
      </Button>
      <Button>
        <PinDrop /> Maps
      </Button>
      <Button>
        <Notes /> News
      </Button>
      <Button>
        <ImageIcon /> Images
      </Button>
      <Button>
        <Videos /> Videos
      </Button>
      <Button>
        <MoreVertIcon /> More
      </Button>
    </div>
  );
};

export default SearchPageButtons;