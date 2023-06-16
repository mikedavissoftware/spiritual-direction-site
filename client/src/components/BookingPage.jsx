import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router-dom"

import { GlobalContext } from "../App"


export default function BookingPage() {

  const { api } = useContext(GlobalContext)

  const history = useHistory()
  const redirect = () => {
    history.push("/")
  }

  const [success, setSuccess] = useState([])
  const [errors, setErrors] = useState([])

  const newForm = {
    name: "",
    email: "",
    content: ""
  }
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(`${api}/contact_forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((res) => {
          console.log(res)
          setErrors([])
          setSuccess(res.success)
        });
        setFormData(newForm)
        console.log(success)
        console.log("contact successful")
      } else {
        (r.status === 500) ? (
          setErrors(["Database unreachable."])
        ) : (
          r.json().then((res) => {
            setSuccess([])
            setErrors(res.errors)
          })
        )
        console.log(errors)
        console.log("contact unsuccessful")
      }
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-white text-primary">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Booking Page</h1>
            <p className="py-6">This is the booking page component</p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>

      <h4 className="text-accent">{success}</h4>
      {(errors.length > 0) ? (
        <>
          {errors.map((error) => {
            return <h4 className="text-error">{error}</h4>
          })}
          <h4 className="text-error">Please try again or email us directly at <a href='mailto:mikedavissoftware@gmail.com' className="underline font-bold">mikedavissoftware@gmail.com</a>.</h4>
        </>
      ) : (null)}

      <div className="p-5 rounded-2xl">
        <form onSubmit={handleSubmit}>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text text-black dark:text-white">What is your name?</span>
            </label>
            <input id="name" name="name" type="text" placeholder="Type name here..." value={formData.name} onChange={handleChange} className="input input-bordered w-full max-w-xs text-white text-lg" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text text-black dark:text-white">What is your email?</span>
            </label>
            <input id="email" name="email" type="text" placeholder="Type email here..." value={formData.email} onChange={handleChange} className="input input-bordered w-full max-w-xs text-white text-lg" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text text-black dark:text-white">How can we help you?</span>
            </label>
            <textarea id="content" name="content" className="textarea textarea-bordered h-48 text-white text-lg" placeholder="Type message here..." value={formData.content} onChange={handleChange} ></textarea>
          </div>

          <div className="grid my-5 max-w-2xl mx-auto justify-items-end">
            <div>
              <button type="submit" className="bg-accent text-white hover:bg-[#7f7] hover:text-black"><span className="drop-shadow-sm-dark">Send</span></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}