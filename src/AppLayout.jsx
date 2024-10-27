import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideNav';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  
  const openSidebar = () => {
    setScrollPosition(window.scrollY);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isSidebarOpen, scrollPosition]);


  return (
    <div>
        {isSidebarOpen ? (
        <SideBar onClose={closeSidebar} />
      ) : (
        <div className='flex flex-col min-h-screen'>
          <Header onMenuClick={openSidebar} />
          <main>
          <Home />
          <About />
          <Courses />
          <Reviews />
          <Contact />
        </main>
        <Footer />
            </div>
        )}
      
    </div>
  )
}

export default AppLayout
