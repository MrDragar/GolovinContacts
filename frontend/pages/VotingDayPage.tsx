import React from 'react';
import Layout from '../components/Layout';
import { BookOpenIcon, MapPinIcon, CalendarIcon, TicketIcon, FilePenIcon, ArchiveIcon } from '../components/icons/Icons';

const skyColor = "text-sky-400";

const steps = [
  {
    icon: <BookOpenIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Изучите',
    description: 'предвыборные программы кандидатов, политических партий и сделайте свой выбор',
  },
  {
    icon: <MapPinIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Найдите',
    description: (
      <>
        адрес и карту своего избирательного участка можно найти на сайте{' '}
        <a
          href="https://www.cikrf.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline"
        >
          cikrf.ru
        </a>
      </>
    ),
  },
  {
    icon: <CalendarIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Придите',
    description: 'в день голосования на свой избирательный участок с паспортом. Время голосования: с 08:00 до 20:00',
  },
  {
    icon: <TicketIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Получите',
    description: 'бюллетень в избирательной комиссии. За получением бюллетеня обратитесь к члену избирательной комиссии и пройдите в кабину для голосования',
  },
  {
    icon: <FilePenIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Заполните',
    description: `бюллетень, поставьте любую отметку (галочку, крестик, кружок) в квадрате напротив фамилии понравившегося кандидата или названия политической партии, которой вы доверяете. Если бюллетень заполнен неразрешённым способом, например, если вы поставили отметку за двух и более кандидатов, бюллетень считается недействительным`,
  },
  {
    icon: <ArchiveIcon className={`w-10 h-10 ${skyColor}`} />,
    title: 'Опустите',
    description: 'заполненный бюллетень в ящик для голосования',
  },
];

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 ${className}`}>
    <h3 className="text-2xl font-bold text-gray-100 mb-4">{title}</h3>
    <div className="text-lg text-gray-200 leading-relaxed space-y-4">{children}</div>
  </div>
);

const VotingDayPage: React.FC = () => {
  return (
    <Layout title="Единый день голосования">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl font-bold text-gray-100 tracking-tighter sm:text-7xl">
            Как проголосовать
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 sm:text-2xl">
            6 простых шагов, чтобы реализовать ваше избирательное право и повлиять на будущее
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 -translate-x-3 -translate-y-3 w-14 h-14 bg-[#35414F] border border-white/10 rounded-full flex items-center justify-center font-extrabold text-2xl ${skyColor} shadow-md`}>
                {index + 1}
              </div>
              <div className="mb-5 flex justify-center items-center h-12">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-24 space-y-10">
          <h2 className="text-4xl font-bold text-center tracking-tight text-gray-100">Дополнительная информация</h2>

          <InfoCard title="Особенности голосования">
            <p>На стандартных выборах голосование может проводиться до 3 дней: с пятницы по воскресенье (с 08:00 до 20:00).</p>
            <p>Вы вправе проголосовать на любом избирательном участке, если заранее подали заявление по месту нахождения.</p>
          </InfoCard>

          <InfoCard title="Дистанционное электронное голосование (ДЭГ)">
            <p>В ряде регионов доступно голосование через портал Госуслуги. Для этого необходимо заранее подать заявление.</p>
            <p>Проголосовать через ДЭГ можно в любой из дней голосования с 08:00 до 20:00 непосредственно на портале.</p>
          </InfoCard>

          <InfoCard title="Голосование по месту нахождения">
            <p>Если в день голосования вы будете находиться за пределами вашего избирательного участка, вы можете заранее подать заявление и проголосовать по месту фактического нахождения.</p>
            <p><strong>Заявление можно подать через:</strong> МФЦ, Госуслуги, Территориальную (ТИК) или Участковую (УИК) избирательную комиссию.</p>
          </InfoCard>

          <div className="bg-red-900/60 border-2 border-red-600/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-300 mb-4">Обратите внимание!</h3>
            <div className="text-lg text-gray-200 leading-relaxed space-y-3">
              <p>Если бюллетень вынесен за пределы помещения для голосования, он будет признан недействительным.</p>
              <p>Запрещается голосовать за других избирателей, передавать паспорт, а также заранее заполнять или подписывать заявление о голосовании по месту нахождения.</p>
            </div>
          </div>

          <div className="mt-16 text-center bg-sky-900/30 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-100 mb-4">Как еще можно участвовать в выборах?</h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Помимо участия в голосовании, вы можете принять участие в выборах в качестве кандидата, члена избирательной комиссии или волонтёра.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VotingDayPage;