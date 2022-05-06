import React from "react";
import { Button } from '@material-ui/core';
import './HomePageButtons.css';

const HomePageButtons = ({ searchButtonHandler }) => {
  return (
    <div className="home-button-area">
      <Button type="submit" onClick={searchButtonHandler} variant="outlined">Google Search</Button>
      <Button variant="outlined">I'm Feeling Lucky</Button>
    </div>
  );
};

export default HomePageButtons;