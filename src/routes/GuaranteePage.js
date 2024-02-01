import React, { useState } from 'react';
import './GuaranteePage.css';
import guarantee1 from '../img/chat.svg';
import guarantee2 from '../img/chat.svg';
import guarantee3 from '../img/chat.svg';
import guarantee4 from '../img/chat.svg';
import banner from '../img/banner.jpg';
const AboutSection = () => (
  <section id="о-нас">
    <h3>О нас</h3>
    <p>
      GameHub - это инновационная платформа, специально созданная для обеспечения безопасных и успешных сделок в мире геймерского маркетинга. Наш уникальный подход к гарантированию безопасности сделок включает в себя систему проверки аккаунтов, двухфакторную аутентификацию и четкие правила, создавая высокий уровень доверия между продавцями и покупателями.
    </p>
  </section>
);

const FaqSection = ({ faqQuestions }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section id="ответы-на-вопросы">
      <h3>Ответы на вопросы</h3>
      <div className="faq-content">
        {faqQuestions.map((faqQuestion) => (
          <div key={faqQuestion.id} className="faq-question">
            <div className="panel-title" onClick={() => toggleAnswer(faqQuestion.id)}>
              {faqQuestion.question}
            </div>
            {activeQuestion === faqQuestion.id && (
              <div className="panel-content">
                <div className="answer">
                  {faqQuestion.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const BenefitsSection = () => (
  <section id="почему-gamehub">
    <h3>Почему GameHub?</h3>
    <ul>
      <div  >
        <li >
          <img  src={guarantee1} alt="Надежные продавцы" />
          <h2>Надежные продавцы</h2>
        </li>
      </div>
      <div  >
        <li >
          <img  src={guarantee2} alt="Поддержка 24/7" />
          <h2>Поддержка 24/7</h2>
        </li>
      </div>
      <div  >
        <li >
          <img  src={guarantee3} alt="Экономия времени" />
          <h2>Экономия времени</h2>
        </li>
      </div>
      <div  >
        <li >
          <img  src={guarantee4} alt="Безопасность" />
          <h2>Безопасность</h2>
        </li>
      </div>
    </ul>
    <p>
      GameHub - это надежная платформа, которая обеспечивает безопасность, эффективность и поддержку пользователей.
    </p>
  </section>
);


const GuaranteePage = () => {
  const [faqQuestions] = useState([
    {
      id: "q1",
      question: "Как купить??",
      answer: "Ну я не знаю сам как думаешь?",
    },
    {
      id: "q2",
      question: "Как оплатить??",
      answer: "Ну я не знаю сам как думаешь?",
    },
    {
      id: "q3",
      question: "че делать?",
      answer: "Ну я не знаю сам как думаешь?",
    },
  ]);

  return (
    <div className="guarantee-page">
      <div className='banner'>
        <img src={banner} className='banner-img' />
      </div>
      <div className='ponpon'>
        <div className="about-section">
          <AboutSection />
        </div>
        <div className="faq-section">
          <FaqSection faqQuestions={faqQuestions} />
        </div>
      </div>
      <div className="benefits-section">
        <BenefitsSection />
      </div>
    </div>
  );
};

export default GuaranteePage;
