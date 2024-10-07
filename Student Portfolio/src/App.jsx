import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AboutMe from './Pages/AboutMe';     
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
