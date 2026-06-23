import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full max-w-[360px]' src={assets.about_image}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescrypt, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand how valuable your time is, and we are committed to connecting you with the right doctors quickly and hassle-free.</p>
          <p>At Prescrypt, we continuously strive to improve your experience — whether you are booking your first appointment or managing ongoing care. Our platform brings together a wide network of verified, experienced doctors across all major specialities, all in one place.</p>
          <b>Our Vision</b>
          <p>Our vision is to make quality healthcare accessible to everyone. We aim to bridge the gap between patients and trusted medical professionals by building a seamless, reliable, and easy-to-use appointment platform that puts your health first.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>
          Why <span className='text-gray-700 font-semibold'>Choose Us?</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle — book a confirmed appointment in just a few clicks, anytime and anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access our network of trusted doctors across all specialities from the comfort of your home — no waiting rooms, no phone calls, no hassle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>We remember your preferences and history so every interaction feels tailored — get doctor recommendations and reminders that match your specific health needs.</p>
        </div>
      </div>
    </div>
  )
}

export default About