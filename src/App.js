import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import DataNotFound from './Pages/DataNotFound';
import { createContext, useState } from 'react';

export const MyContext = createContext('');


function App() {
  const [text, setText] = useState([]);
  return (
    <MyContext.Provider value={{ text, setText }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<DataNotFound />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
