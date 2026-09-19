import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from "axios";
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

  async function handleSubmit(e) {
    e.preventDefault();
    toast.success("message send succesfully");
    setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    // try {
    //   const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, form)
    //   console.log("FULL SEND RESPONSE:", res.data);
    //   toast.success(res.data.message)
    //   setForm({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: ""
    //   })

    // } catch (error) {
    //   console.log(error);
    //   toast.error("Failed to send message");
    // }

  }
  return (
    <div className='font-serif flex flex-col items-center justify-center min-h-screen px-4 border border-gray-100 shadow-xl/30 gap-20'>
      <h1 className='text-blue-900 font-bold text-3xl md:text-4xl lg:text-4xl text-center hover:text-blue-800 transition duration-300 hover:scale-101'>Contact</h1>

      <form onSubmit={handleSubmit} className='w-full max-w-md bg-slate-50 border border-gray-300  shadow-lg shadow-gray-900/50 rounded-lg p-6 shadow-md flex flex-col gap-6'>
        <h3 className='text-blue-900 font-bold text-xl md:text-2xl lg:text-3xl text-center hover:text-blue-800 transition duration-300 hover:scale-101'>Contact form</h3>

        <input type="text" name="name"
          value={form.name}
          onChange={handleChange}
          placeholder='Full Name' className='border border-gray-400 p-2 rounded-sm ' />

        <input type="text" name="email"
          value={form.email}
          onChange={handleChange}
          placeholder='Email ' className='border border-gray-400 p-2 rounded-sm' />


        <input type="text" name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder='Subject ' className='border border-gray-400 p-2 rounded-sm' />
        <textarea type="text" name="message"
          value={form.message}
          onChange={handleChange}
          placeholder='Your Message' className='border border-gray-400 p-2 rounded-sm' />

        <button type="submit" className='bg-blue-600 text-white  p-2 rounded-sm transition duration-300 hover:scale-105 hover:bg-blue-700'>Send Message</button>
      </form>
    </div>
  )
}
// preventDefault: page refresh huna bata save garxa 
// handlechange: create to handle changes in form inputs

export default Contact
