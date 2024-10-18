"use client"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <header className="text-blue-950 bg-orange-300">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold hover:text-gray-600">My Website</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-600 font-bold transition">Home</Link>
            <Link to="/about" className="hover:text-gray-600 font-bold transition">About</Link>
            <Link to="/contact" className="hover:text-gray-600 font-bold transition">Contact</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
