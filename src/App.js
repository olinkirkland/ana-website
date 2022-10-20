import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Home';

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {}, []);

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
