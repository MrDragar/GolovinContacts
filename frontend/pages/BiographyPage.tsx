import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, MenuIcon } from '../components/icons/Icons';
import MobileMenu from '../components/MobileMenu';

const bioSections = [
    {
        title: '',
        content: <p>Родился 5 января 1989 года в семье простых рабочих</p>
    },
    {
        title: 'Образование',
        content: <p>Высшее, МГТУ им. К. Г. Разумовского, специальность — «Юриспруденция»</p>
    },

    {
        title: 'Профессиональная деятельность',
        content: (
            <div className="space-y-4">
                <p><strong className="font-semibold text-gray-100">2008–2018:</strong> Юридическая практика в сфере уголовного права  </p>
                <p><strong className="font-semibold text-gray-100">2018–2019:</strong> Заместитель руководителя департамента внутреннего аудита МРСК Центр и Поволжье</p>
                <p><strong className="font-semibold text-gray-100">с 2020</strong> по настоящее время занимается предпринимательской деятельностью</p>
            </div>
        )
    },
    {
        title: 'Награды и грамоты',
        content: (
            <div className="space-y-3">
                <p>Нагрудный знак «За отличия в борьбе с организованной преступностью»</p>
                <p>Ведомственные грамоты и благодарности от МВД РФ и ФСБ РФ</p>
            </div>
        )
    },
    {
        title: 'Семейное положение',
        content: <p>Не женат, воспитывает дочь</p>
    },
    {
        title: '',
        content: (
            <div className="space-y-3">
                <p>Член партии ЛДПР</p>
                <p>Доверенное лицо кандидата в Президенты РФ Л.Э. Слуцкого в 2024 году</p>
                <p>Курирует вопросы ответственного обращения с животными в ЛДПР</p>
            </div>
        )
    },

     {
        title: 'Личные качества',
        content: (
            <div className="space-y-3">
                <p>Имеет активную гражданскую позицию</p>
                <p>Ведет здоровый образ жизни</p>
                <p>Помогает приютам с бездомными животными</p>
                <p>Участвует в восстановлении православных церквей</p>
                <p>Умеет работать и взаимодействовать на разных уровнях власти</p>
                <p>Патриот России</p>

            </div>
        )
    },

    {
        title: 'Зарегистрирован и проживает в Костроме',

    }
];

const BiographyPage: React.FC = () => {
  const imageUrl = "/images/golovin_2.png";
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
    <div className="min-h-screen bg-[#35414F]">

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 bg-[#35414F]/80 backdrop-blur-sm z-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
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
        </div>
      </header>

      <div className="md:grid md:grid-cols-2">
        {/* Left Side (Image) - Desktop Only */}
        <div 
            className="hidden md:block sticky top-0 h-screen bg-gray-800 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
        </div>

        {/* Right Side (Content) */}
        <div className="p-6 sm:p-10 md:p-16 lg:p-20">
            {/* Back Button - Desktop */}
            <div className="hidden md:block mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
                    <ArrowLeftIcon className="w-5 h-5"/>
                    <span className="font-medium text-lg">На главную</span>
                </Link>
            </div>
            
            {/* Mobile Image */}
            <div className="md:hidden mb-12">
                 <img 
                    src={imageUrl}
                    alt="Евгений Головин"
                    className="w-full h-[63vh] object-cover object-top rounded-2xl shadow-lg mb-8 bg-white"
                  />
            </div>

            {/* Title block for both mobile and desktop */}
            <div className="mb-12">
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-100">Евгений Головин</h1>
                 <p className="text-xl md:text-2xl text-gray-300 mt-2">Помощник депутата Государственной Думы Федерального Собрания Российской Федерации</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
                {bioSections.map((section, index) => (
                    <div key={index} className="border-t border-white/10 pt-8 first:border-t-0">
                        <h2 className="text-2xl font-bold text-gray-100 mb-4">{section.title}</h2>
                        <div className="text-lg text-gray-200 leading-relaxed">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default BiographyPage;