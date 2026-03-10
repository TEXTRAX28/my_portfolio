import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioWebsite from './Portfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioWebsite />
  </StrictMode>,
)