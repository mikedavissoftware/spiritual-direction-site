import { NavLink } from "react-router-dom"

import ProfilePicture from "../assets/images/prof-pic-1-cropped.jpg"

export default function Header() {



  return (
    <div className="navbar bg-black p-4">
      <div className="avatar">
        <div className="w-20 rounded-full m-2">
          <img src={ProfilePicture} />
        </div>
      </div>
      <div className="flex-1">
        <NavLink exact to="/" className="btn btn-ghost normal-case text-xl">Mike Davis, Spiritual Therapist</NavLink>
      </div>
      <div className="flex-none">
        <ul id="nav-links" className="menu menu-horizontal">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/booking">Booking</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
      </div>
    </div>
  )
}