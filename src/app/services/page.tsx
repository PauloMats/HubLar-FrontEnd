"use client";
import Header from '../components/NavBar';
import Footer from '../components/Footer';
import CardService from '../components/CardService';

const Services = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Nossos Serviços</h1>
        <div className="row">
          <CardService title="Regularização Fundiária" description="Legalize seu imóvel." imageUrl="/" />
          <CardService title="Projeto de Interiores" description="Design de interiores acessível." imageUrl="/" />
          <CardService title="Orientação Financeira" description="Ajudamos a planejar sua obra." imageUrl="/" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
