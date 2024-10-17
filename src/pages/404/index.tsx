import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NotFound from './404.tsx'
import './404.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotFound />
  </StrictMode>,
)
