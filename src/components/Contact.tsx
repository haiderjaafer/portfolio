"use client"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";

const Contact = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


  return (
    <section
    id="contact"
    className="grid md:grid-cols-1 my-12 md:my-12 py-18 gap-1  items-center"
  >
   
 

  
    <div className="text-right ">
      <h5 className=" font-extrabold text-3xl text-white my-2">
        للاتصال
      </h5>
      <p className="text-[#ADB7BE] mb-4 text-right font-extrabold text-2xl ">
       هذة هي وسائل التواصل التابعة لي ودائما هي مفتوحة لاي سؤال او استفسار
       
      </p>

      
 
   
      <ul className="text-white text-right pr-7 flex flex-col items-end list-none">
  <li >
    <Link
      href="https://github.com/haiderjaafer"
      target="_blank"
      className="text-white font-extrabold hover:text-fuchsia-600 hover:underline hover:transition-colors"
    >
      https://github.com/haiderjaafer
    </Link>
  </li>
  <li >
    <label className="text-white font-extrabold hover:text-fuchsia-600 hover:underline hover:transition-colors cursor-pointer">
      haiderjaafer6.9@gmail.com
    </label>
  </li>
  <li >
    <label className="text-white font-extrabold hover:text-fuchsia-600 hover:underline hover:transition-colors cursor-pointer">
      07705898725
    </label>
  </li>
</ul>


   
   
    
    </div>
  </section>
  )
}
export default Contact