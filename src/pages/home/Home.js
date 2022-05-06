import React, { useContext } from "react";
import './Home.css';
import { SearchBox } from "../../components";
import { AppContext } from "../../state/StateProvider";

const Home = () => {

  const appContext = useContext(AppContext);

  console.log(appContext);

  return (
    <div className="home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="no-img" />
      <SearchBox onClickHandler={appContext.updateSearchTerm} />
    </div>
  );
};

export default Home;