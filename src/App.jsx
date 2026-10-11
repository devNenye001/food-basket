import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ShowcaseSection from './components/ShowcaseSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import OrderModal from './components/OrderModal';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('mini');

  // Handle URL hash changes (e.g. #404)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setCurrentView('404');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    if (window.location.hash === '#404') {
      setCurrentView('404');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === '404') {
      window.location.hash = '#404';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrder = (size = 'mini') => {
    setSelectedSize(size);
    setIsOrderModalOpen(true);
  };

  return (
    <div className={`app-root ${currentView === '404' ? 'view-404' : ''}`}>
      <Navbar 
        onNavigate={navigateTo} 
        onOpenOrder={() => handleOpenOrder('mini')} 
        currentView={currentView} 
      />

      {currentView === '404' ? (
        <NotFoundPage 
          onGoHome={() => navigateTo('home')} 
          onOpenOrder={() => handleOpenOrder('mini')} 
        />
      ) : (
        <main>
          <Hero onOpenOrder={() => handleOpenOrder('mini')} />
          <AboutSection />
          <MenuSection onOpenOrder={() => handleOpenOrder('mini')} />
          <ShowcaseSection onSelectSize={(size) => handleOpenOrder(size)} />
          <TestimonialsSection />
          <FaqSection />
          <CtaBanner onOpenOrder={() => handleOpenOrder('mini')} />
        </main>
      )}

      <Footer onNavigate={navigateTo} />

      {/* Interactive Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        initialSize={selectedSize} 
      />
    </div>
  );
}
