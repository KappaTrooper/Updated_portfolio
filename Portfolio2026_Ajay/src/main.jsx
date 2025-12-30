import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Nav from "./navbar/nav.jsx";
import Hero from "./hero/hero.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
  </StrictMode>,
)
