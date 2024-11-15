import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Import GSAP
import '../css/login.css';
import '../index.css';

function Login() {
  const logoRef = useRef(null); // Create a ref for the logo element

  useEffect(() => {
    // GSAP animation for the logo
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 0.5,
      ease: 'bounce.out', // Add the easing effect to create the bounce animation
    });
  }, []);

  return (
    <div className='maindiv'>
      <div className="formdiv">
        <div className="flex items-center justify-center form">
          <div className="w-full max-w-md p-8 space-y-4 shadow-md rounded-lg bg-[#2A3663]">
            <h2 className="text-2xl font-bold text-center text-white">
              Please Enter Required Details to Verify Email / Mobile Number
            </h2>

            <form>
              <div className="form-control">
                <label className="label  text-xl text-white font-medium">Enter Aadhar Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="text-xl input bg-white input-bordered border-gray-600 w-full text-black"
                />
              </div>

              <div className="form-control">
                <label className="label text-white text-xl font-medium">Enter Mobile Number</label>
                <input
                  type="email"
                  placeholder=""
                  className="text-xl input bg-white input-bordered border-gray-600 border-3 w-full text-black"
                />
              </div>

              <div className="form-control">
                <label className="label text-white text-xl font-medium">Enter Captcha</label>
                <input
                  type="email"
                  placeholder=""
                  className="text-xl input bg-white input-bordered border-gray-600 border-3 w-full text-black"
                />
              </div>

              <div className="form-control mt-4">
                <button className="btn bg-green-600 text-white font-bold text-xl w-full hover:bg-orange-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="infodiv">
        {/* <video className="background-video" autoPlay muted loop>
          <source src={require('../images/falg-video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {/* Your content goes here */}
        </div>

      </div>
  );
}

export default Login;
