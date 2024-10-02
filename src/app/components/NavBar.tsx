import Link from 'next/link';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import logoHubLar from '../public/images/HubLar-Logo.png';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o menu hamburguer
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu ao clicar em uma opção
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image src={logoHubLar} alt="HubLar" width={100} height={100} />
            HubLar
          </Link>
          <div className={`collapse navbar-collapse ${menuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav ms-auto">
            <li>
              <Link href="/" className="nav-link" onClick={closeMenu}>Início</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={closeMenu}>Sobre</Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={closeMenu}>Mídia PIBTV</Link>
            </li>
            <li>
              <Link href="/services" className="nav-link" onClick={closeMenu}>Sobre nós</Link>
            </li>
            </ul>
          </div>
          <div className="menu">
          <button onClick={toggleMenu}>☰</button>
        </div>
        </div>
      </nav>
    </header>
  );
};



