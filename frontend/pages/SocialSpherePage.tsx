import React from 'react';
import Layout from '../components/Layout';
import { GiftIcon, LandmarkIcon, HomeIcon, HeartPulseIcon, GraduationCapIcon, UsersIcon, TicketIcon } from '../components/icons/Icons';

interface SupportDetail {
  label: string;
  text: string;
}

interface SupportSubItem {
  subtitle: string;
  description?: string;
  details: SupportDetail[];
}

interface SupportItem {
  icon: React.ReactNode;
  title: string;
  content: SupportSubItem[];
}

const skyColor = "text-sky-400";

const SocialSpherePage: React.FC = () => {
  const supportItems: SupportItem[] = [
    {
      icon: <GiftIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'При рождении ребёнка',
      content: [
        {
          subtitle: 'Подарок для новорожденного',
          details: [
            { label: 'Как получить', text: 'Зарегистрируйте рождение ребёнка в ЗАГСе.' },
            { label: 'Что получите', text: 'Комплект одежды и вещей первой необходимости.' },
          ],
        },
      ],
    },
    {
      icon: <LandmarkIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'Финансовая поддержка',
      content: [
        {
          subtitle: 'Региональный семейный капитал (100 000 ₽)',
          details: [
            { label: 'Условие', text: 'Рождение третьего и последующих детей; проживание в Костромской области не менее года.' },
            { label: 'Как получить', text: 'Подать заявление в центр социальных выплат site.csv44.ru.' },
          ],
        },
        {
          subtitle: 'Ежемесячные пособия на детей',
          details: [
            { label: 'Условие', text: 'Доход семьи ниже прожиточного минимума.' },
            { label: 'Как получить', text: 'Обратиться в Пенсионный фонд или МФЦ.' },
          ],
        },
      ],
    },
    {
      icon: <HomeIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'Жилищные условия',
      content: [
        {
          subtitle: 'Социальный контракт',
          description: 'Подходит, если нужно улучшить жилищные условия или открыть своё дело.',
          details: [
            { label: 'Как получить', text: 'Обратиться в органы соцзащиты вашего района или МФЦ.' },
          ],
        },
      ],
    },
    {
      icon: <HeartPulseIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'Здоровье',
      content: [
        {
          subtitle: 'Сертификат здоровья молодожёнам',
          details: [
            { label: 'Как получить', text: 'При регистрации брака в ЗАГСе получите сертификат на бесплатное медицинское обследование.' },
          ],
        },
        {
          subtitle: 'Поддержка беременных и молодых мам',
          description: 'Бесплатные лекарства и медицинские услуги.',
          details: [
            { label: 'Как получить', text: 'Обратиться в поликлинику по месту жительства.' },
          ],
        },
      ],
    },
    {
      icon: <GraduationCapIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'Образование и детские сады',
      content: [
        {
          subtitle: 'Бесплатное проживание в общежитии для мам-студенток',
          details: [
            { label: 'Условие', text: 'Наличие ребёнка до 3 лет и очное обучение.' },
            { label: 'Как получить', text: 'Обратиться в администрацию учебного заведения.' },
          ],
        },
        {
          subtitle: 'Первоочередное зачисление в детский сад',
          description: 'Для многодетных и студенческих семей.',
          details: [
            { label: 'Как получить', text: 'Подать заявление через портал госуслуг или МФЦ.' },
          ],
        },
      ],
    },
    {
        icon: <UsersIcon className={`w-8 h-8 ${skyColor}`} />,
        title: 'Семейные мероприятия',
        content: [
          {
            subtitle: 'Клубы молодой семьи',
            description: 'Психологическая помощь, тренинги, праздники.',
            details: [
              { label: 'Как записаться', text: 'Обратиться в Молодёжный центр вашего района.' },
            ],
          },
          {
            subtitle: 'Конкурсы и фестивали для семей',
            details: [
              { label: 'Как подать заявку', text: 'Через Молодёжный центр или администрацию муниципального образования.' }
            ],
          },
        ],
    },
    {
      icon: <TicketIcon className={`w-8 h-8 ${skyColor}`} />,
      title: 'Льготы для многодетных',
      content: [
        {
          subtitle: 'Единое удостоверение многодетной семьи',
          description: 'Дает право на бесплатное посещение музеев, театров, спортивных объектов.',
          details: [
            { label: 'Как получить', text: 'Подать документы в МФЦ или органы соцзащиты.' },
          ],
        },
      ],
    },
  ];

  return (
    <Layout title="Помощь молодой семье">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl font-bold text-gray-100 tracking-tighter sm:text-7xl">
            Навигатор для молодой семьи
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 sm:text-2xl">
            Государственная поддержка для семей Костромской области на каждом этапе жизни.
          </p>
        </div>

        <article className="max-w-4xl mx-auto">
            {supportItems.map((item, index) => (
              <section key={item.title} className="mb-12">
                  <div className="flex items-center gap-5 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center">
                          {item.icon}
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight text-gray-100">{item.title}</h2>
                  </div>

                  <div className="space-y-8">
                      {item.content.map((subItem) => (
                          <div key={subItem.subtitle}>
                              <h3 className="font-semibold text-xl text-gray-100">{subItem.subtitle}</h3>
                              {subItem.description && <p className="mt-2 text-lg text-gray-200 leading-relaxed">{subItem.description}</p>}
                              <div className="mt-4 space-y-2 text-lg text-gray-200 leading-relaxed">
                                  {subItem.details.map((detail, detailIndex) => (
                                      <p key={detailIndex}>
                                          <strong className="font-medium text-gray-100">{detail.label}:</strong> {detail.text}
                                      </p>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
                  {index < supportItems.length - 1 && <hr className="mt-12 border-white/10" />}
              </section>
            ))}
        </article>
      
        <div className="mt-16 max-w-4xl mx-auto text-center bg-sky-500 text-white p-12 rounded-2xl">
            <p className="text-3xl font-bold tracking-tight">
             Помните: государство рядом с вами на каждом шагу вашей семейной жизни!
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default SocialSpherePage;