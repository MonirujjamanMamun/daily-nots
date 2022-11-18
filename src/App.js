import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import DataNotFound from './Pages/DataNotFound';
import { createContext } from 'react';

export const MyContext = createContext('');

function App() {
  return (
    <div>
      <MyContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='*' element={<DataNotFound />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
