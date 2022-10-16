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
        <Alert
          text="Lorem ipsum €49 dolor sit amet adipis macing elit. Suscipit optio consectetur debitis deleniti, nulla quasi ipsa ea. *"
          icon="gift"
          onClick={() => {
            console.log('clicked');
          }}
        />
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
