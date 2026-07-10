import React, { useState } from "react";
import './App.css';
function App() {
  //hooks
  const [count,setCount] = useState(0);
  return (
    // <div className="flex gap-4 items-center justify-center flex-col min-h-screen">
    //   <h1 >Count:{count}</h1>
    //   <button className="bg-blue-400 font-bold rounded-sm text-white p-1 hover:scale-105 transition duration-700 rounded-sm" onClick={()=>setCount(count+1)}>Increase</button>
    
    // <button className="bg-blue-400 font-bold rounded-sm text-white p-1 hover:scale-105 transition duration-700 rounded-sm" onClick={()=>setCount(count-1)}>Decrease</button>
 
    // </div>
    <div className=" bg-gray-200 flex gap-4 flex-col items-center  w-70 h-90 border border-black-400 m-10">
      <h1 className="italic font-bold">Sign Up Form</h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col  gap-4 ">
          <label>Name:</label>
          <input type="text" placeholder="enter full name" />
        </div>

        <div className="flex flex-col   gap-4  ">
          <label>Email:</label>
          <input type="email" placeholder="example@gmail.com" />
        </div>

        <div className="flex flex-col   gap-4 ">
          <label>Address:</label>
          <input type="text" placeholder="enter permanent address " />
        </div>
        
        <button className="m-4 bg-green-500 text-white p-2  rounded-sm w-20 ml-14 hover:scale-105 transition duration-800 ease-in-out cursor-pointer">Sign Up</button>
      
      </form>
    </div>
  );
}
export default App
/* <div className="flex justify-center items-center min-h-screen">
      <form className="border-2 border-black-300 p-2 w-full max-w-xs">
        <h1 className="text-center font-bold text-green-400 uppercase 
        lower:scale transition duration-700 cursor-pointer p-3">Contact
         form</h1>
        <div className="flex flex-col">
          <label>Name:</label>
          <input type="text" placeholder="Full name"></input>
        </div>

        <div className="flex flex-col">
          <label>Address:</label>
          <input type="text" placeholder="permanent address"></input>
        </div>

        <div className="flex flex-col">
          <label>Email:</label>
          <input type="email" placeholder="example@gmail.com"></input>
        </div>

        <div className="flex flex-col" >
          <label>Subject:</label>
          <input type="text" placeholder="subject"></input>
        </div>

        <div className="flex flex-col"> 
          <label>Message:</label>
          <textarea placeholder="your message...."></textarea>
        </div>

        <div className="flex flex-col ">
          <button className="text-white-600 bg-green-600 cursor-pointer">send message</button>
        </div>
      </form>
    </div> */