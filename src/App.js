import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import DataNotFound from './Pages/DataNotFound';
import { createContext, useEffect, useState } from 'react';
import UpdateNote from './Pages/UpdateNote';
import HomeDashboard from './Pages/HomeDashboard';
import AddNotes from './Pages/AddNotes';
import PostView from './Pages/PostView';
import PostUpdate from './Pages/PostUpdate';
// import MoviesView from './Pages/MoviesView';
// import PostView from './Pages/PostView';
// import PostUpdate from './Pages/PostUpdate';


// context api 
export const MyContext = createContext('');


function App() {

  const [notes, setNotes] = useState([]);

  // get data from localStorage 
  useEffect(() => {
    const localNots = localStorage.getItem("notes");
    setNotes(JSON.parse(localNots));
  }, [])

  return (
    <MyContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path='/' element={<HomeDashboard />}>
          <Route index element={<Home />} />
          <Route path='addnotes' element={<AddNotes />} />
          <Route path='updatesnote/:id' element={<UpdateNote />} />
          <Route path='postview' element={<PostView />} />
          <Route path='postupdate/:id' element={<PostUpdate />} />
          {/* <Route path='*' element={<DataNotFound />} /> */}
        </Route>
      </Routes>
    </MyContext.Provider >
  );
}

export default App;
