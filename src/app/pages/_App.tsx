import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Arquivo para seus estilos globais
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
