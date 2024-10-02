"use client";
import React from 'react';
import CardService from '../app/components/CardService';
import Footer from '../app/components/Footer';
import NavBar from './components/NavBar';
import HeroBanner from '../app/components/HeroBanner';


export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroBanner title={''} subtitle={''} backgroundImage={''} />
      <div className="container mt-5">
        <h2>Serviços que Oferecemos</h2>
        <div className="row">
          <CardService title="Projeto Arquitetônico Popular" description="Descrição do serviço" imageUrl="" />
          <CardService title="Planejamento de Obra" description="Descrição do serviço" imageUrl="" />
          <CardService title="Reforma Rápida" description="Descrição do serviço" imageUrl="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
