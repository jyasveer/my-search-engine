import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Search } from './pages';
import { StateProvider } from './state/StateProvider';

function App() {

  const updateSearchTerm = (newSearchTerm) => {
    setAppState({ ...appState, searchTerm: newSearchTerm });
  };

  const [appState, setAppState] = useState({
    searchTerm: ''
  });

  const contextObject = {
    searchTerm: appState.searchTerm,
    updateSearchTerm
  }

  return (
    <>
      <StateProvider value={contextObject}>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Router>
      </StateProvider>
    </>
  );
}

export default App;
