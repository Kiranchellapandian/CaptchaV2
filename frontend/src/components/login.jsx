import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Lock, User } from 'lucide-react';
import { motion } from 'framer-motion'

// Import images
import flagImage from '../images/flag2.jpg';
import student from '../images/students.jpg';
import farmer from '../images/farmer.jpg';
import working from '../images/working2.jpg';

export default function AnimatedTwoColumnLogin() {
  const formRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleInputFocus = (e) => {
    gsap.to(e.target, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    // Form animation: fade from left to right
    gsap.fromTo(
      formRef.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Carousel animation: fade from right to left
    gsap.fromTo(
      carouselRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      image: flagImage,
      alt: 'Se',
      title: 'Pride of India',
      description: 'Aadhar verification ensures every citizen is part of the digital revolution, empowering India for a brighter future.',
    },
    {
      id: 2,
      image: student,
      alt: 'Easy Verification',
      title: 'Enabling Education',
      description: 'Aadhar unlocks access to scholarships and academic opportunities, shaping the future of young India.',
    },
    {
      id: 3,
      image: farmer,
      alt: 'Quick Access',
      title: 'Empowering Farmers',
      description: 'Access government schemes and subsidies seamlessly with Aadhar-based services tailored for the backbone of our nation.',
    },
    {
      id: 4,
      image: working,
      alt: 'Quick Access',
      title: 'Supporting the Workforce',
      description: 'Aadhar helps workers secure their rights, enabling access to essential services and opportunities for growth.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row-reverse min-h-screen bg-gray-100 overflow-hidden">
      {/* Login Form Column (Now on the Right) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8" ref={formRef}>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verify Your Identity</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter the required details to verify your email or mobile number
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="form-control w-full">
              <label htmlFor="aadhar-number" className="label">
                <span className="label-text text-lg text-bold text-black">Aadhar Number</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="aadhar-number"
                  name="aadhar"
                  type="text"
                  required
                  placeholder="Enter 12 Digit Aadhar Number"
                  className="input input-bordered w-full pl-10 bg-white"
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <label className="inline-flex items-center cursor-pointer ml-20">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <div
                  className={`w-6 h-6 border-2 rounded-md ${
                    isChecked ? 'border-green-500 bg-green-50' : 'border-gray-500 bg-white'
                  } transition-colors duration-200 ease-in-out`}
                >
                  <motion.svg
                    className="w-full h-full text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate={isChecked ? 'visible' : 'hidden'}
                    variants={{
                      visible: {
                        pathLength: 1,
                        opacity: 1,
                        transition: { duration: 0.2, ease: 'easeInOut' },
                      },
                      hidden: {
                        pathLength: 0,
                        opacity: 0,
                        transition: { duration: 0.2, ease: 'easeInOut' },
                      },
                    }}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              </div>
              <span className="ml-3 text-lg font-medium text-gray-700">Confirm you're human</span>
            </label>

            <div>
              <button
                type="submit"
                className="btn bg-[#046A38] text-white w-full flex justify-center hover:bg-[#FF671F] border-none focus:ring-0"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-white text-xl" aria-hidden="true" />
                </span>
                Login with OTP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Auto Carousel Column (Now on the Left) */}
      <div className="w-full md:w-1/2 bg-indigo-600 relative overflow-hidden" ref={carouselRef}>
        <div className="absolute inset-0 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute text-white text-center px-4">
                <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 focus:outline-none hover:bg-opacity-50 transition duration-150 ease-in-out mt-20"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 focus:outline-none hover:bg-opacity-50 transition duration-150 ease-in-out mt-20"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
