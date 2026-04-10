import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageLoader } from "../../components/PageLoader";

export const PageContent = () => {
  return <main className="flex-grow-1 container mt-auto py-3">
    <Suspense fallback={<PageLoader />}>
      <Outlet/>
    </Suspense>
  </main>
};