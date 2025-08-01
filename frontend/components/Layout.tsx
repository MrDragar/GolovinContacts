import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftIcon, MenuIcon } from './icons/Icons';
import MobileMenu from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  return (
    <div className="min-h-screen bg-[#35414F] text-gray-200 antialiased">
      <header className="sticky top-0 bg-[#35414F]/80 backdrop-blur-sm z-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center py-4">
             <h1 className="text-xl font-bold tracking-tight text-gray-100">
                Евгений Головин
              </h1>
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-gray-100 font-semibold"
              >
                  <MenuIcon className="w-5 h-5" />
                  <span>МЕНЮ</span>
              </button>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
              <ArrowLeftIcon className="w-5 h-5"/>
              <span className="font-medium text-lg">На главную</span>
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight text-center text-gray-100 px-4">{title}</h1>
            <div className="w-48 hidden sm:block"></div> {/* Spacer to balance the header */}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-7xl">
        {children}
      </main>

      <footer className="py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
           {/* Intentionally minimal footer */}
        </div>
      </footer>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Layout;