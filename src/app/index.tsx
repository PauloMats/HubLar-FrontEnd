import Footer from './components/Footer';
import CardService from './components/CardService';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container-main-page">
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
