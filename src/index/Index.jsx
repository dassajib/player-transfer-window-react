import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from '../components/Appbar/Appbar'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import Window from '../components/Window/Window'
import PlayerDetails from '../components/PlayerDetails/PlayerDetails'

const Index = () => {
  return (
    // here is routing maintained
    <BrowserRouter>
        <Appbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/window' element={<Window />} />
            {/* Dynamic routing */}
            <Route path="/player/:playerId" element={<PlayerDetails />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Index