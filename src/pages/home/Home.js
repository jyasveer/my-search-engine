import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HomePageButtons, SearchBox } from "../../components";
import { AppContext } from "../../state/StateProvider";
import './Home.css';

const Home = () => {

  const appContext = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const searchButtonHandler = (event) => {
    event.preventDefault();
    appContext.updateSearchTerm(searchTerm);
    setSearchTerm('');
    navigate('./search');
  };

  const inputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(appContext);

  return (
    <form className="home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="no-img" />
      <SearchBox onChangeHandler={inputChangeHandler} searchTerm={searchTerm} />
      <HomePageButtons searchButtonHandler={searchButtonHandler} />
    </form>
  );
};

export default Home;