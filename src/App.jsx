import React from 'react';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Aboutme from './components/Aboutme';
import Project from './components/Project';
import Tools from './components/Tools';

const App = () => {
  return (
    <div>
     <NavBar />
     <Banner />
     <Aboutme />
     <Tools />
     <Project />
     <Contact />
    </div>
  );
}

export default App;
