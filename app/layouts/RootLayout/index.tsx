import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Suspense } from "react";
import { PageLoader } from "../../components/PageLoader";

export const RootLayout = () => {
  return <div>
    <Header />
    <main>
      <Suspense fallback={<PageLoader />}>
        <Outlet/>
      </Suspense>
    </main>
    <Footer />
  </div>;
}