import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LayoutOutlet } from '../LayoutOutlet';

export const RootLayout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <LayoutOutlet />
    <Footer />
  </div>
);
