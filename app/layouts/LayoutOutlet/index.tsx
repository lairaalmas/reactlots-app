import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader';

export const LayoutOutlet = () => (
  <main className="flex-grow-1 mt-auto">
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </main>
);
