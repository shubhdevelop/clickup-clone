import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './SiderBar/Sidebar';
import Context from '@/context/context';

function MainLayout() {
  return (
    <div className="max-h-vh">
      <Context>
        <Navbar />
        <div className="h-[calc(100vh-3rem)] max-w-full flex flex-row justify-start">
          <Sidebar />

          <Outlet />
        </div>
      </Context>
      {/* <Footer /> */}
    </div>
  );
}
export default MainLayout;
