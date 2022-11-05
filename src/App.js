import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Home';
import { initializeAppLanguage } from './locale/locale';

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    // Determine the language to use
    initializeAppLanguage();
  }, []);

  return (
    <Router
      basename={
        window.location.hostname === 'localhost' ? '/' : '/ana-website/'
      }
    >
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
