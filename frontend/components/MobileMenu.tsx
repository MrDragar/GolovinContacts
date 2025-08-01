

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';
import { XIcon, ArrowRightIcon } from './icons/Icons';

const hoverColorClass = "hover:text-[#FBBF24]";

// Social links with smaller font size for mobile menu
const SocialLinks = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
        <a
            href="https://vk.com/golovinldpr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white/80 hover:text-white transition-colors duration-300 drop-shadow-sm"
        >
            ВКонтакте
        </a>
        <span className="mx-4 text-white/30 text-xl font-light select-none">|</span>
        <a
            href="https://t.me/golovin_russia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white/80 hover:text-white transition-colors duration-300 drop-shadow-sm"
        >
            Телеграм
        </a>
    </div>
);

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };
    
  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-[#1A202C]/95 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-transparent transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6 pt-20">
           <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
              <XIcon className="w-8 h-8" />
           </button>
           <ul className="mt-8">
               {location.pathname !== '/' && (
                   <li className="border-b border-white/20">
                       <button
                           onClick={() => handleNavigate('/')}
                           className={`group flex items-start justify-between w-full py-4 text-2xl font-semibold text-white transition-colors duration-200 ${hoverColorClass}`}
                       >
                           <span className="text-left">На главную</span>
                           <ArrowRightIcon className={`w-6 h-6 mt-1 flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FBBF24]`} />
                       </button>
                   </li>
               )}
               {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path} className="border-b border-white/20 last:border-b-0">
                    <button
                        onClick={() => handleNavigate(item.path)}
                        className={`group flex items-start justify-between w-full py-4 text-2xl font-semibold text-white transition-colors duration-200 ${hoverColorClass}`}
                    >
                        <span className="text-left">{item.name}</span>
                        <ArrowRightIcon className={`w-6 h-6 mt-1 flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FBBF24]`} />
                    </button>
                </li>
              ))}
           </ul>
           <div className="mt-auto pt-8 pb-4">
                <SocialLinks className="justify-center" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;