import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import DataNotFound from './Pages/DataNotFound';
import { createContext, useEffect, useState } from 'react';
import UpdateNote from './Pages/UpdateNote';
import Form from './Pages/Form';

export const MyContext = createContext('');


function App() {

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const localNots = localStorage.getItem("notes");
    setNotes(JSON.parse(localNots));
  }, [])

  return (
    <MyContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/updatesnote/:id' element={<UpdateNote />} />
        <Route path='*' element={<DataNotFound />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
