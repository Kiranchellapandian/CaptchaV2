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
                  placeholder="Enter 16 Digit Aadhar Number"
                  className="text-xl input bg-white input-bordered border-gray-600 w-full text-black"
                />
              </div>

              
              <div className="form-control">
              <div className="flex items-center ml-20 mt-5">
              <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
              <label className="label text-white text-xl font-medium ml-3">I'm Not a Robot</label>
              </div>
            </div>



              <div className="form-control mt-4">
                <button className="btn bg-[#409028] text-white font-bold text-xl w-full hover:bg-orange-500">
                  Login
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
