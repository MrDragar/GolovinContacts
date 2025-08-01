import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';
import { MenuIcon, ArrowRightIcon } from '../components/icons/Icons';
import MobileMenu from '../components/MobileMenu';

const hoverColorClass = "hover:text-[#FBBF24]"; 

const SocialLinks = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
        <a
            href="https://vk.com/golovinldpr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-medium text-white/80 hover:text-white transition-colors duration-300 drop-shadow-sm"
        >
            ВКонтакте
        </a>
        <span className="mx-5 text-white/30 text-4xl font-light select-none">|</span>
        <a
            href="https://t.me/golovin_russia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-medium text-white/80 hover:text-white transition-colors duration-300 drop-shadow-sm"
        >
            Телеграм
        </a>
    </div>
);

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => sessionStorage.getItem('isMenuOpen') === 'true');
  const heroImageUrl = "/images/golovin_1.jpg";
  //const heroImageUrl = "/images/golovin_main.jpg";

  useEffect(() => {
    sessionStorage.setItem('isMenuOpen', String(isMenuOpen));
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
    <div className="bg-gray-800">
      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden">
        <div 
          className="h-screen overflow-hidden bg-cover bg-left-center text-white relative"
          style={{ backgroundImage: `url(${heroImageUrl})`, height: '100vh' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="relative h-screen flex flex-col">
            <header className="flex justify-between items-center p-4 sm:p-6 z-20">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                Евгений Головин
              </h1>
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-sm text-white font-semibold"
              >
                <MenuIcon className="w-5 h-5" />
                <span>МЕНЮ</span>
              </button>
            </header>

            <div className="flex-grow"></div>

            <footer className="p-6 sm:p-8 text-left z-10">
              <h2 className="text-2xl sm:text-3xl font-medium text-white/90 leading-tight drop-shadow-lg max-w-md">
               Помощник депутата Государственной Думы Федерального Собрания Российской Федерации
              </h2>
              
              <hr className="my-6 border-white/20" />

              <Link
                to="/biography"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold text-lg uppercase tracking-wider rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                Биография
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
            </footer>
          </div>
          <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div 
        className="hidden md:flex h-screen overflow-hidden bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="w-full flex justify-between items-stretch relative z-10">
          {/* Left content area */}
          <div className="flex-grow flex flex-col justify-end p-12 lg:p-16">
            <div className="max-w-xl">
              <h1 className="text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">Евгений Головин</h1>
              <p className="text-xl text-white/80 drop-shadow-md">Помощник депутата Государственной Думы Федерального Собрания Российской Федерации</p>
            </div>
          </div>
          
          {/* Right nav panel */}
          <div className="w-full max-w-2xl flex flex-col h-full">
            <div className="flex-grow flex flex-col justify-center p-12 lg:p-16">
              <nav>
                <ul className="">
                  {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path} className="border-b border-white/10 last:border-b-0">
                      <Link
                        to={item.path}
                        className={`group flex items-center justify-between w-full py-5 text-3xl font-semibold text-white/90 transition-colors duration-300 drop-shadow-md ${hoverColorClass}`}
                      >
                        <span className="text-left">{item.name}</span>
                        <ArrowRightIcon className={`w-9 h-9 flex-shrink-0 ml-4 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FBBF24]`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex-shrink-0 p-12 lg:p-16 pt-8 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;