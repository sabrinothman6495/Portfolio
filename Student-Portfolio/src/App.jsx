import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/contact';
import './App.css';



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
