import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const WithFooter = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default WithFooter;