import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import Introduct from './components/Main/Introduct/Introduct';
import About from './components/Main/About/About';
import Services from './components/Main/Services/Services';
import Skills from './components/Main/Skils/Skills';
import Contacts from './components/Main/Contacts/Contacts';
import Projects from './components/Main/Projects/Projects';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Header onContactClick={openModal} />
      <main>
        <Introduct onContactClick={openModal} />
        <About />
        <Services />
        <Skills />
        <Projects />
        {isModalOpen && <Contacts onClose={closeModal} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
