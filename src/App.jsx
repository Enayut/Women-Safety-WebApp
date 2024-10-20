import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/navbar"
import Landing from "./pages/Landing"
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Exercise from './pages/Exercise';
import MentalHealth from './pages/MentalHealth';
import Support from './pages/Support';
import SOS from './pages/SOS';

export default function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />{' '}
          <Route path="/about" element={<About />} />{' '}
          <Route path="/exercise" element={<Exercise />} />
          {/* <Route path="/mental-health" element={<MentalHealth />} /> */}
          <Route path="/support" element={<Support />} />
          <Route path="/sos" element={<SOS />} />
          <Route
            path="*"
            element={<div className="p-4">404 - Not Found</div>}
          />
        </Routes>
    </BrowserRouter>
  )
}