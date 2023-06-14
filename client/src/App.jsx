import { createContext } from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import EventsPage from "./components/EventsPage"
import BookingPage from "./components/BookingPage"
import FAQPage from "./components/FAQPage"
import Footer from "./components/Footer"

export default function App() {



  return (
    <div>
      <Header />
      
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
      </Switch>

      <Footer />
    </div>
    
  )
}