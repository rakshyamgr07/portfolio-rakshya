import React, { useState } from "react";
import './App.css';
function Counter() {
  //hooks
  const [count,setCount] = useState(0);
  return (
    <div className="bg-gray-200 h-90 w-60 m-10 border border-black-300 flex gap-4 items-center justify-center flex-col">
      <h1 >Count:{count}</h1>
      <button className="bg-blue-400 font-bold rounded-sm text-white p-1 hover:scale-105 transition duration-700 rounded-sm" onClick={()=>setCount(count+1)}>Increase</button>
    
    <button className="bg-blue-400 font-bold rounded-sm text-white p-1 hover:scale-105 transition duration-700 rounded-sm" onClick={()=>setCount(count-1)}>Decrease</button>
 
    </div>
  );
}

    function Form(){
      return(

     
    <div className=" bg-gray-200 flex gap-4 flex-col items-center  w-60 h-90 border border-black-400 m-10">
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
function Form2(){
  return(
     <div className="flex m-10">
      <form className=" bg-gray-200 border border-black-300 p-2 w-60 h-90">
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

        <div className="flex flex-col p-4 ">
          <button className="text-white-600 bg-green-600 cursor-pointer">send message</button>
        </div>
      </form>
    </div> 
  );
}
function App(){
  return(
      <>
      <div className="flex flex-rows flex-wrap bg-blue-300">
      <Counter/>
      <Form/>
      <Form2/>
</div>
      </>
  );
}
export default App
// export default Form
// export default Form2
