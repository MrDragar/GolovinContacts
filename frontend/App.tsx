
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BiographyPage from './pages/BiographyPage';
import ProgramPage from './pages/ProgramPage';
import ContactPage from './pages/ContactPage';
import AnimalProtectionPage from './pages/AnimalProtectionPage';
import VotingDayPage from './pages/VotingDayPage';
import SocialSpherePage from './pages/SocialSpherePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/animal-protection" element={<AnimalProtectionPage />} />
        <Route path="/voting-day" element={<VotingDayPage />} />
        <Route path="/social-sphere" element={<SocialSpherePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
