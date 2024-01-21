import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { SIDEBAR_NAV_ITEMS } from '../../data/navigation';
import NavLinkItem from '../../components/NavLinkItem';

const SidebarNavigation = () => {
  return (
    <div >
      <header className='container mt-2'>
        <ul className='d-flex flex-row justify-content-center'>
          {SIDEBAR_NAV_ITEMS.map((navlink) => (
            <NavLinkItem
              key={navlink.path}
              path={navlink.path}
              title={navlink.title}
            />
          ))}
        </ul> 
      </header>
      <hr />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SidebarNavigation;