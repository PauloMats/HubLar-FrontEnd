import React from 'react';
import styles from '../styles/about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutContent}>
        <h1>Sobre a HubLar</h1>
        <p>
          A HubLar é o primeiro negócio de impacto social de Sorocaba, oferecendo serviços de arquitetura e construção civil para a população de baixa renda.
          Nosso objetivo é orientar e auxiliar na execução de reformas e construções, garantindo a qualidade do serviço e a redução de custos através de um planejamento adequado e profissionais capacitados.
        </p>
        <p>
          Acreditamos na importância de ter um arquiteto ou engenheiro ao lado da população em cada etapa da obra, desde o projeto até a execução. Com os nossos serviços, ajudamos famílias a construírem com mais segurança e economia.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <ul>
          <li>Projeto Arquitetônico Popular</li>
          <li>Planejamento de Obra</li>
          <li>Reforma Rápida em 10 dias</li>
          <li>Regularização Fundiária</li>
          <li>Projeto de Interiores</li>
          <li>Orientação Financeira</li>
        </ul>
      </section>

      <section className={styles.teamSection}>
        <h2>Nossa Equipe</h2>
        <p>
          Nossa equipe é composta por profissionais experientes e engajados em promover impacto social positivo, garantindo que as famílias tenham acesso à moradias mais seguras e confortáveis.
        </p>
      </section>
    </div>
  );
};

export default About;
