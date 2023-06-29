import { NavLink } from "react-router-dom"

import ProfilePicture from "../assets/images/prof-pic-1-cropped.jpg"

export default function Header() {



  return (
    <div className="navbar bg-black">
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src={ProfilePicture} />
        </div>
      </div>
      <div className="flex-1">
        <NavLink exact to="/" className="btn btn-ghost normal-case text-xl">Mike Davis, Spiritual Director</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/booking">Booking</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          {/* <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-black">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  )
}