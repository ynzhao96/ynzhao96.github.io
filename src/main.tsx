import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import './pages/home/home.css'
import Problems from './pages/problems/problems'
import './pages/problems/problems.css'
import NotFound from './pages/404/404'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/problems' element={<Problems />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  </StrictMode>,
)
