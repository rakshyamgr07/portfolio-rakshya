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
    <div className='flex flex-col items-center justify-center min-h-screen px-4 '>
      <h1 className='text-green-500 font-bold text-3xl text-center'>Contact</h1>

      <form onSubmit={handleSubmit} className='w-full max-w-md border border-gray-500 rounded-lg p-6 shadow-md flex flex-col gap-4'>
        <h3 className='text-green-500 font-bold text-center text-xl '>Contact form</h3>

        <input type="text" name="name"
          value={form.name}
          onChange={handleChange}
          placeholder='Full Name' className='border border-gray-400 p-1' />

        <input type="text" name="email"
          value={form.email}
          onChange={handleChange}
          placeholder='Email ' className='border border-gray-400 p-1 ' />


        <input type="text" name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder='Subject ' className='border border-gray-400 p-1' />
        <textarea type="text" name="message"
          value={form.message}
          onChange={handleChange}
          placeholder='Your Message' className='border border-gray-400 p-2' />

        <button type="submit" className='bg-green-500 text-white p-2 rounded-sm transition duration-300 hover:scale-110'>Send Message</button>
      </form>
    </div>
  )
}
// preventDefault: page refresh huna bata save garxa 
// handlechange: create to handle changes in form inputs

export default Contact
