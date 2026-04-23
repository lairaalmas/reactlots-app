import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router.tsx';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
