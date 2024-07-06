import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Skills />
        <Resume/>
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
