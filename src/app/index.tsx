import Header from './components/NavBar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import CardService from './components/CardService';

export default function Home() {
  return (
    <div>
      <Header />
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
