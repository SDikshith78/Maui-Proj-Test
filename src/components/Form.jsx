import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const notify = () => toast('Form Sent!');
  const error = () => toast('Please fill in the form.');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);

    if (
      !formValues.name?.trim() ||
      !formValues.email?.trim() ||
      !formValues['LinkedIn Profile']?.trim() ||
      !formValues.message?.trim()
    ) {
      error();
      return;
    }

    formData.append('access_key', 'c82f8abb-e192-4b4a-8299-6056ba68dc44');
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const res = await response.json();

      if (res.success) {
        setSubmitted(true);
        formRef.current?.reset();
        notify();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error(`Submission failed: ${res.message || 'Unknown error'}`, {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error('An error occurred. Please try again later.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-2 sm:px-4"
    >
      {/* Background shapes hidden on mobile */}
      <div className="hidden md:flex items-center justify-center space-x-10 z-500">
        <div className="bg-shape bg-teal opacity-50 blur-2xl animate-moveShape1" />
        <div className="bg-shape bg-primary opacity-50 blur-2xl animate-moveShape2" />
        <div className="bg-shape bg-purple opacity-50 blur-2xl animate-moveShape3" />
      </div>

      {/* Main Form Card */}
      <div className="backgroundCard6 absolute z-40 h-auto md:h-[80vh] w-full max-w-[95vw] md:w-[105vh] rounded-3xl bg-zinc-100 opacity-50 px-4 md:px-8 py-6 md:py-4">
        <h1 className="px-2 py-4 text-center text-3xl md:text-5xl font-neueMontrealmedium font-semibold title">
          Get in Touch
        </h1>
        <div className="text-center">
          <div className="mb-5">
            <TextField
              id="standard-basic-name"
              label="Full-Name"
              name="name"
              variant="standard"
              sx={{ width: '80%', maxWidth: '500px' }}
              InputProps={{ sx: { color: 'black' } }}
              InputLabelProps={{
                sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
              }}
            />
          </div>

          <div className="mb-5">
            <TextField
              id="standard-basic-email"
              label="Email"
              name="email"
              variant="standard"
              sx={{ width: '80%', maxWidth: '500px' }}
              InputProps={{ sx: { color: 'black' } }}
              InputLabelProps={{
                sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
              }}
            />
          </div>

          <div className="mb-5">
            <TextField
              id="standard-basic-linkedin"
              label="LinkedIn Profile"
              name="LinkedIn Profile"
              variant="standard"
              sx={{ width: '80%', maxWidth: '500px' }}
              InputProps={{ sx: { color: 'black' } }}
              InputLabelProps={{
                sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
              }}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-left text-sm md:text-base pb-2 pl-7 md:relative md:left-60">
              Drop your message here ⬇️
            </h3>
            <textarea
              className="w-full max-w-[500px] h-40 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 resize-none text-black"
              placeholder="Enter your message"
              name="message"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <input
        type="submit"
        value="Submit"
        className="absolute z-40 bottom-28 md:bottom-24 rounded-xl bg-[#042880] px-8 py-2 text-sm md:px-8 md:py-2 md:text-base text-white hover:bg-blue-300 font-[personal2] cursor-pointer"
      />

      <ToastContainer />

    </form>

  );
};

export default Form;
