import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router.tsx';
import { FavoriteLotsProvider } from './context/FavoriteLotsContext/';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoriteLotsProvider>
      <Router />
    </FavoriteLotsProvider>
  </StrictMode>
);
