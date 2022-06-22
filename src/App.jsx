import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </React.Fragment>
  )
};

export default App;