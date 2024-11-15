import React, { useState } from 'react';
import '../css/login.css'
import '../index.css'


function Login() {
  

  return (
    <div className='maindiv'>
        <div className="formdiv ">
        <div className="flex items-center justify-center form">
      <div className="w-full max-w-md p-8 space-y-4  shadow-md rounded-lg bg-white ">
        <h2 className="text-2xl font-bold text-center text-black">Please Enter Required Details to Verify Email / Mobile Number
        </h2>
        
              <form>  
            <div className="form-control">
              <label className="label text-black text-xl font-medium">Enter Aadhar Number</label>
              <input type="text" placeholder="" className=" text-xl input bg-white input-bordered border-gray-600 w-full text-black" />
            </div>

            <div className="form-control">
              <label className="label text-black text-xl font-medium"> Enter Moblie Number</label>
              <input type="email" placeholder="" className=" text-xl input bg-white input-bordered border-gray-600 border-3 w-full text-black" />
            </div>

            <div className="form-control">
              <label className="label text-black text-xl font-medium"> Enter Captcha</label>
              <input type="email" placeholder="" className=" text-xl input bg-white input-bordered border-gray-600 border-3 w-full text-black" />
            </div>    


            <div className="form-control mt-4">
              <button className="btn bg-green-600 text-white font-bold text-xl w-full hover:bg-orange-500 ">Submit</button>
            </div>
      </form>
      </div>
    </div>  

        </div>
        <div className="infodiv">
          <video className="background-video" autoPlay muted loop>
            <source src={require('../images/falg-video.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            {/* Your content goes here */}
          </div>
        </div>


    </div>
  );
}

export default Login