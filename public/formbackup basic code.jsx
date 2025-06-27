import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Form() {
  const formRef = useRef(null); // Create a ref for the form
  const [submitted, setSubmitted] = useState(false); // State to control visibility (now unused but kept for potential future use)

  const notify = () => toast("Form Sent!");
  const error = () => toast("Don't sent empty form or Please fill the form correctly!");


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b8b7b983-bd00-4622-92fb-12ece7fbbe62");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())
    .catch((error) => {
      // console.error("Error", error); 
    });

    if (res.success) {
      // console.log("Success", res);
      setSubmitted(true); // Set submitted to true (currently no visible effect)
      formRef.current.reset(); // Clear the form
      // Optionally, hide the state after a delay (e.g., 3 seconds)
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      // console.log("Error", res);
    }
  };

  return (
    <form ref={formRef} className="relative w-full h-screen overflow-hidden flex justify-center items-center z-10" onSubmit={onSubmit}>
      {/* Shape Container */}
      <div className="flex justify-center items-center space-x-10 z-500">
        <div className="bg-shape bg-teal opacity-50 blur-2xl animate-moveShape1"></div>
        <div className="bg-shape bg-primary opacity-50 blur-2xl animate-moveShape2"></div>
        <div className="bg-shape bg-purple opacity-50 blur-2xl animate-moveShape3"></div>
      </div>

      {/* Form Container */}
      <div className="form w-[105vh] h-[80vh] absolute z-40 bg-zinc-300 opacity-50 rounded-3xl">
        <h1 className="text-5xl font-neueMontrealmedium text-center px-2 py-4 font-semibold title">
          Get in Touch
        </h1>
        <div className="text-center">
          <TextField
            id="standard-basic"
            label="Full-Name/Username"
            name="name"
            variant="standard"
            sx={{ width: "50%" }}
            InputProps={{ sx: { color: "black" } }}
            InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
          />
          <div className="email py-7">
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              sx={{ width: "50%" }}
              InputProps={{ sx: { color: "black" } }}
              InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
            />
          </div>
          <div className="subject">
            <TextField
              id="standard-basic"
              label="LinkedIn Profile"
              name="LinkedIn Profile" // Corrected typo from "Linkedine Profile"
              variant="standard"
              sx={{ width: "50%" }}
              InputProps={{ sx: { color: "black" } }}
              InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
            />
          </div>
          <div className="textarea py-7">
            <h3 className="flex justify-center items-start relative -left-[99px] pb-5">Drop your message here ⬇️</h3>
            <textarea
              className="w-[50%] h-40 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none resize-none"
              placeholder="Enter your message"
              name="message"
            />
          </div>
        </div>
      </div>
      <input type="submit" onClick={notify} className="bg-[#042880] text-white hover:bg-blue-300 px-8 py-2 rounded-xl absolute z-40 bottom-24 font-[personal2]" />
      <ToastContainer />
    </form>
  );
}

export default Form;