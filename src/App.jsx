import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/navbar"
import Landing from "./pages/Landing"
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/contact" element={<Contact />} />{' '}
          <Route path="/about" element={<About />} />{' '}
          <Route
            path="*"
            element={<div className="p-4">404 - Not Found</div>}
          />
        </Routes>
    </BrowserRouter>
  )
}