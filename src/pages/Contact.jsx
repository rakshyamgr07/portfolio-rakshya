import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from "axios";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, form)
      console.log("FULL SEND RESPONSE:", res.data);
      toast.success(res.data.message)
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }

  }
  return (
    <div className=' flex flex-col w-full items-center justify-center min-h-screen px-4 border border-gray-100 shadow-xl/30 gap-20'>
      <h1 className='text-blue-900 font-bold text-3xl md:text-4xl lg:text-4xl text-center hover:text-blue-800 transition duration-300 hover:scale-101'>Contact</h1>

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col flex-wrap gap-3'>
          <p className='text-2xl font-bold capitalize md:text-3xl'>Let's build something great</p>
        <p className='text-sm'>I’m open to internships, junior roles, and exciting projects. Reach out directly or send me a message below.</p>
        </div>
        {/* div */}
        <div className='flex flex-col sm:flex-col-1 md:flex-row gap-8 justify-center w-full lg:gap-20  justify-center '>
        <div className='flex  flex-col gap-3 items-start w-100 lg:w-150'>

          {/* email */}
          <div className=' w-full border border-blue-200 rounded-lg p-4 flex flex-row gap-4  hover:border-blue-400 transition duration-300 hover:scale-105'>
            <div className='text-3xl  bg-blue-50 rounded-sm p-2 text-blue-400  '>
              <FaEnvelope />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase font-semibold text-gray-500'>Email</span>
              <span className='text-sm font-bold '>rakshya.gm123@gmail.com</span>
            </div>
          </div>

          {/* phone */}
         <div className='w-full border border-blue-200 rounded-lg p-4 flex flex-row gap-4 hover:border-blue-400 transition duration-300 hover:scale-105'>
            <div className=' text-3xl bg-blue-50 rounded-sm p-2 text-blue-400 '>
              <FaPhone />
            </div>
             <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase font-semibold text-gray-500'>Phone</span>
              <span className='text-sm font-bold '>+977-9763631696</span>
            </div>
          </div>

          {/* location */}
         <div className='w-full border border-blue-200 rounded-lg p-4 flex flex-row gap-4  hover:border-blue-400 transition duration-300 hover:scale-105'>
            <div className='text-3xl bg-blue-50 rounded-sm p-2 text-blue-400  '>
            <FaLocationDot />
            </div>
             <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase font-semibold text-gray-500'>Location</span>
              <span className='text-sm font-bold '>Lalitpur, Kathmandu, Nepal</span>
            </div>
          </div>

          {/* github  */}
         <div className='w-full border border-blue-200 rounded-lg p-4 flex flex-row gap-4  hover:border-blue-400 transition duration-300 hover:scale-105'>
            <div className='text-3xl bg-blue-50 rounded-sm p-2 text-blue-400 '>
            <FaGithub />
            </div>
             <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase font-semibold text-gray-500'>github</span>
              <span className='text-sm font-bold '>github.com/rakshyamgr07</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='w-100 lg:w-150 bg-slate-50 border border-gray-300  shadow-lg shadow-gray-900/50 rounded-lg p-6 shadow-md mb-10 flex flex-col gap-6'>
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
      </div>
    </div>
  )
}
// preventDefault: page refresh huna bata save garxa 
// handlechange: create to handle changes in form inputs

export default Contact
