import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Components
import ScrollToTop from './components/ScrollToTop.jsx'

// Pages
import EntryPage from './pages/EntryPage.jsx'
import MainPage from './pages/MainPage.jsx'
import OurStoryPage from './pages/OurStoryPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'
import RsvpPage from './pages/RsvpPage.jsx'
import GuestPage from './pages/GuestPage.jsx'
import AdminPage from './pages/AdminPage.jsx'

// GitHub Pages 子路徑
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
        <Route path="/guest/:guestId" element={<GuestPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

