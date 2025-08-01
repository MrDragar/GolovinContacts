import React from 'react';
import Layout from '../components/Layout';
import { PawPrintIcon, CheckIcon } from '../components/icons/Icons';

const roadmapItems = [
    { title: "Регистрация животных", text: "чтобы не было «ничьих»." },
    { title: "Лицензирование заводчиков", text: "чтобы исключить разведение ради прибыли без ответственности." },
    { title: "Ответственность владельцев", text: "чтобы любой укус, выброс, трагедия имели ФИО." }
];

const AnimalProtectionPage: React.FC = () => {
  return (
    <Layout title="Защита животных">
      <div className="max-w-4xl mx-auto">
        <article className="space-y-8 text-lg text-gray-200 leading-relaxed">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 tracking-tight">
                Ответственность за тех, кого приручили
            </h1>
          </div>

          <p>В правовой системе субъект права — это тот, кто обладает правами и обязанностями. У собаки нет ни одного, ни другого. Она не может быть участником договора, не может быть осуждена, не может защищаться в суде. Следовательно, она не может быть носителем ответственности.</p>
          
          <p>Значит, всё, что делает собака, — это отражение действий или бездействия человека. Человека, нужно привлекать к ответственности.</p>

          <blockquote className="my-8 p-6 bg-sky-500/10 border-l-4 border-sky-400 text-xl font-semibold text-sky-100">
             Не "собака покусала", а "человек допустил нападение".
          </blockquote>

          <p>Учёт, лицензирование, ответственность — это не детали, это система координат. Мы не предлагаем запутанный контроль. Мы предлагаем дорожную карту, в которой всё логично:</p>

          <div className="my-10 p-8 bg-white/5 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-3xl font-bold text-gray-100 text-center mb-6">Дорожная карта к безопасности</h2>
              {roadmapItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1 w-7 h-7 bg-sky-500 text-white rounded-full flex items-center justify-center">
                          <CheckIcon className="w-5 h-5 stroke-[3px]" />
                      </div>
                      <div>
                          <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                          <p className="text-gray-300">{item.text}</p>
                      </div>
                  </div>
              ))}
          </div>

          <p>Это не идеология. Это — инфраструктура общественной безопасности. Как ГИБДД, как Росреестр, как ПФР. Мы строим систему защиты общества от зла, которое лает, кусает и исчезает без следа. Только теперь оно не исчезнет. Потому что будет учтено.</p>

          <div className="mt-12 text-center bg-sky-500 text-white p-10 rounded-2xl">
              <p className="text-2xl font-bold tracking-tight">
                  Примем — и мы защитим и людей, и животных.
              </p>
              <p className="text-xl mt-2">
                  Затянем — и будем считать очередных покусанных детей.
              </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default AnimalProtectionPage;