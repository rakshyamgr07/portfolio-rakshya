import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Contact() {
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      subject: "",
      message: ""
    })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", form.name)
    localStorage.setItem("email", form.email)
    localStorage.setItem("subject", form.subject)
    localStorage.setItem("message", form.message)

    toast.success("Message sent successfully")
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }
  return (
    <div className='font-serif flex flex-col items-center justify-center min-h-screen px-4 border border-gray-100 shadow-xl/30'>
      <h1 className='text-green-900 font-bold text-4xl text-center m-4'>Contact</h1>

      <form onSubmit={handleSubmit} className='w-full max-w-md bg-green-50 border border-gray-300  shadow-lg shadow-gray-900/50 rounded-lg p-6 shadow-md flex flex-col gap-4'>
        <h3 className='text-green-800 font-bold text-center text-xl font-serif'>Contact form</h3>

        <input type="text" name="name"
          value={form.name}
          onChange={handleChange}
          placeholder='Full Name' className='border border-gray-400 p-1 rounded-sm ' />

        <input type="text" name="email"
          value={form.email}
          onChange={handleChange}
          placeholder='Email ' className='border border-gray-400 p-1 rounded-sm' />


        <input type="text" name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder='Subject ' className='border border-gray-400 p-1 rounded-sm' />
        <textarea type="text" name="message"
          value={form.message}
          onChange={handleChange}
          placeholder='Your Message' className='border border-gray-400 p-2 rounded-sm'  />

        <button type="submit" className='bg-green-900 text-white  p-2 rounded-sm transition duration-300 hover:scale-105 hover:bg-green-700'>Send Message</button>
      </form>
    </div>
  )
}
// preventDefault: page refresh huna bata save garxa 
// handlechange: create to handle changes in form inputs

export default Contact
