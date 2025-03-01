
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Dashboard from './page/Dashboard';


import Header from './components/Header';

import Footer from './components/Footer';


// This component represents the root of your application.
export default function App() {
  return (

    <BrowserRouter>
      
      <Header />

      <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<Home />} />
        {/* Route for the about page */}
        <Route path='/about' element={<About />} />
       
      <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  )
}
