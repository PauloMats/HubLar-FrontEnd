import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import CardService from '../components/CardService';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner title={''} subtitle={''} backgroundImage={''} />
      <div className="container mt-5">
        <h2>Serviços que Oferecemos</h2>
        <div className="row">
          <CardService title="Projeto Arquitetônico Popular" description="Descrição do serviço" imageUrl="/images/servico1.jpg" />
          <CardService title="Planejamento de Obra" description="Descrição do serviço" imageUrl="/images/servico2.jpg" />
          <CardService title="Reforma Rápida" description="Descrição do serviço" imageUrl="/images/servico3.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
