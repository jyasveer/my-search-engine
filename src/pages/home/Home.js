import React from "react";
import './Home.css';
import { SearchBox } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="no-img" />
      <SearchBox />
    </div>
  );
};

export default Home;