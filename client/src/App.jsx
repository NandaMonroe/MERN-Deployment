import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'
import Create from './components/Create'
import Main from './components/Main'
import DisplayOne from './components/DisplayOne';
import Update from './components/Update';

function App() {

  return (
    <>
      <h1>Pet Shelter</h1>
      <hr/>

      <Routes>
        <Route path="/" element={<Navigate to="/pets" />} />
        <Route path='/pets' element={<Main />} />
        <Route path='/pets/create' element={<Create />} />
        <Route path='/pets/:id' element={<DisplayOne />} />
        <Route path='/pets/:id/update' element={<Update />} />
      </Routes>
    </>
  )
}

export default App
