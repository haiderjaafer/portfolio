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
    className="grid md:grid-cols-2 my-12 md:my-12 py-18 gap-1  items-center"
  >
   
    <div className="flex flex-col">
   <Link href="https://www.facebook.com/" target="_blank" className="text-white" >facebook</Link>
   <Link href="https://github.com/haiderjaafer" target="_blank"  className="text-white">https://github.com/haiderjaafer</Link>
   
   <label className="text-white">haiderjaafer6.9@gmail.com</label>
   <label className="text-white">07705898725</label>
    </div>

  
    <div className="text-right z-10">
      <h5 className="text-xl font-bold text-white my-2">
        للاتصال
      </h5>
      <p className="text-[#ADB7BE] mb-4 text-right ">
       هذة هي وسائل التواصل التابعة لي ودائما هي مفتوحة لاي سؤال اي استفسار
       
      </p>
    
    </div>
  </section>
  )
}
export default Contact