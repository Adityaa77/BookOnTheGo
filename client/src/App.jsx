import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import Movies from './pages/Movies'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/booking' element={<MyBooking/>} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/date' element={<SeatLayout/>} />
      </Routes>
    </>
  )
}

export default App
