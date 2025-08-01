import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MailIcon, UserIcon, MessageSquareIcon, ChevronDownIcon, CheckIcon } from '../components/icons/Icons';

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-lg bg-white/5">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-white/10 transition-colors rounded-lg"
            >
                <span className="font-medium text-gray-200">{title}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="p-4 pt-0 text-xs text-gray-300 space-y-3 max-h-48 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [isConsentAgreed, setIsConsentAgreed] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConsentAgreed) return;

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    setStatus('submitting');

    try {
      const response = await fetch(`${process.env.SERVER_URL}/notify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке');
      }

      setStatus('submitted');
      form.reset();
      setIsConsentAgreed(false);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Layout title="Подать обращение">
      <div className="max-w-4xl mx-auto">
        {/* Form section */}
        <div>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-100 mb-2">Написать обращение</h2>
            <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">Ваше мнение важно для меня. Заполните форму, я и моя  команда обязательно свяжемся с вами</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-medium text-gray-200">ФИО</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input type="text" name="name" id="name" required className="block w-full rounded-lg border border-white/20 bg-transparent pl-11 pr-4 py-3 text-lg text-white placeholder-gray-400 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50" placeholder="Иванов Иван Иванович" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium text-gray-200">Электронная почта</label>
                  <div className="relative">
                    <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input type="email" name="email" id="email" required className="block w-full rounded-lg border border-white/20 bg-transparent pl-11 pr-4 py-3 text-lg text-white placeholder-gray-400 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50" placeholder="ivan@mail.ru" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-medium text-gray-200">Ваше обращение</label>
                  <div className="relative">
                    <MessageSquareIcon className="absolute left-3.5 top-4 h-5 w-5 text-gray-500" />
                    <textarea name="message" id="message" rows={6} required className="block w-full rounded-lg border border-white/20 bg-transparent pl-11 pr-4 py-3 text-lg text-white placeholder-gray-400 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50" placeholder="Опишите ваш вопрос или предложение..."></textarea>
                  </div>
                </div>
                
                <div className="space-y-4 pt-2">
                    <Accordion title="СОГЛАСИЕ на обработку персональных данных">
                        <p>В соответствии со ст. 9, 15 ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных» в целях осуществления депутатской деятельности, включая: прием граждан, рассмотрения обращений, жалоб и заявлений, взаимодействие с государственными органами и организациями, подготовка и направление запросов, иные формы депутатской деятельности, предусмотренные законодательством Российской Федерации, даю согласие депутату Головину Евгению Сергеевичу на обработку моих персональных данных: фамилия, имя, отчество, дата и место рождения, пол, номер телефона, электронная почта, адрес проживания и регистрации, иные данные:</p>
                        <p>Даю согласие на передачу указанных мной персональных данных Политической партии ЛДПР – Либерально-демократической партии России (107045, г. Москва, пер. Луков, д. 9, к. 1) для информирования о деятельности ЛДПР и её структурных подразделений, уведомления об общественно значимых событиях, организации предвыборной агитации за кандидатов от ЛДПР, участвующих в выборах.</p>
                        <p>Согласие включает любые действия с данными (сбор, хранение, использование, передачу, удаление и др.), как автоматизированные, так и без автоматизации, в соответствии с п. 3 ст. 3 ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных»</p>
                        <p>Согласие действует с момента подписания до отзыва в письменной форме. Отзыв направляется Политической партии ЛДПР – Либерально-демократической партии России письменно.</p>
                    </Accordion>

                    <div className="flex items-center space-x-3">
                        <button type="button" onClick={() => setIsConsentAgreed(!isConsentAgreed)} className={`flex-shrink-0 w-7 h-7 rounded-md border-2 ${isConsentAgreed ? 'bg-sky-500 border-sky-500' : 'border-gray-500 bg-transparent'} flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400`}>
                          {isConsentAgreed && <CheckIcon className="w-5 h-5 text-white stroke-[3px]" />}
                        </button>
                        <label onClick={() => setIsConsentAgreed(!isConsentAgreed)} className="text-base text-gray-200 cursor-pointer select-none">
                            Я прочитал(а) и даю согласие на <span className="font-medium underline">обработку персональных данных</span>
                        </label>
                    </div>
                </div>

                <div>
                  <button type="submit" disabled={status === 'submitting' || !isConsentAgreed} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg text-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300">
                    {status === 'submitting' ? 'Отправка...' : 'Отправить обращение'}
                  </button>
                </div>
                {status === 'submitted' && <p className="text-green-400 text-center text-lg">Спасибо! Ваше обращение успешно отправлено.</p>}
                {status === 'error' && <p className="text-red-400 text-center text-lg">Произошла ошибка. Пожалуйста, попробуйте позже.</p>}
              </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
