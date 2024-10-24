import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/app/app';
import './pages/app/app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
