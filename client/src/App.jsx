import { createContext } from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import EventsPage from "./components/EventsPage"
import BookingPage from "./components/BookingPage"
import FAQPage from "./components/FAQPage"
import Footer from "./components/Footer"

export const GlobalContext = createContext()


export default function App() {

  const api = import.meta.env.PROD ? "https://spiritual-direction-site-backend.onrender.com/admin" : "/api"

  console.log(api)


  return (
    <GlobalContext.Provider value={{ api }} >

      <Header />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>

      <Footer />
      
    </GlobalContext.Provider>
    
  )
}