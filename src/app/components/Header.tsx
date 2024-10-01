import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="HubLar Logo" width="50" />
            HubLar
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/about" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">Serviços</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
