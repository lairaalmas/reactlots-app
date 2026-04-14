import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageContent } from '../../components/PageContent';

export const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
};
