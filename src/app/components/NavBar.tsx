// NavBar.tsx

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
      <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image src={logoHubLar} alt="HubLar" width={75} height={75} />
          </Link>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>
          
          {/* Links que aparecem em telas grandes */}
          <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li>
                <Link href="/" className="nav-link" onClick={closeMenu}>Início</Link>
              </li>
              <li>
                <Link href="/about" className="nav-link" onClick={closeMenu}>Sobre</Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link" onClick={closeMenu}>Contato</Link>
              </li>
              <li>
                <Link href="/services" className="nav-link" onClick={closeMenu}>Serviços</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
