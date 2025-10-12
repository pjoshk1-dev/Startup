import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const NoFooter = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default NoFooter;