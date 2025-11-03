import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/Movies'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {

  const ifAdminRoute =useLocation().pathname.startsWith('/admin')


  return (
    <>
    <Toaster />
      {!ifAdminRoute && <Navbar/>}{/*Use this to not show the navbar when admin login */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/my-bookings' element={<MyBooking/>} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
      </Routes>
       {!ifAdminRoute && <Footer/>}{/*Use this to not show the Footer when admin  */}
    </>
  )
}

export default App
