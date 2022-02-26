import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Успей записаться на программу эффективный рекрутмент" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                  'Если Вы:\n' +
                  '✔\tиспытываете постоянный стресс на работе;\n' +
                  '✔\tмечтаете о быстром и качественном закрытии вакансий;\n' +
                  '✔\tхотите освоить или развить компетенции рекрутера;\n' +
                  '✔\tнацелены на получение стабильного дохода.\n\n' +
                  'Программа «Эффективный рекрутинг» позволит в короткий срок и без отрыва от работы «прокачать» компетенции в области подбора, получить полезные и мощные инструменты привлечения в компанию лучших сотрудников.\n\n' +
                  'Занятия проводятся по субботам (2.04, 9.04, 16.04.2022г.) \n' +
                  'Действует раннее бронирование до 21.03.2022г. \n' +
                  'Стоимость курса 5800 руб.'
                  }
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Программа
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
