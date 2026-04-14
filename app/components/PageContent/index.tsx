import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from '../../components/PageLoader';

export const PageContent = () => {
  return (
    <main className="flex-grow-1 mt-auto">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
