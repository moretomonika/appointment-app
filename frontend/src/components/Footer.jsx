import React from 'react'
//import logo from '../assets/assets_frontend/logo.svg'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid:cols grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/**left section */}
            <div>
                <img className=' mb-5 w-40'src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla dolorum aliquam libero sunt dolor in quia suscipit quos, praesentium ducimus ea odio quae consectetur perspiciatis ad deserunt nihil voluptate.</p>
            </div>
            {/**center sec */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>About us </li>
                    <li>Contact</li>
                    <li>Privacy </li>
                    < li>Home</li>
                </ul>
                        
            </div>
            {/**right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>
                        981131416
                    </li>
                    <li>crappydevtools.133@yahhooo.com</li>
                </ul>
            </div>
        </div>
        {/**=====copyright text ------- */}
        <div>
            <hr></hr>
            <p className='py-5 text-sm text-center'>Copyright Text</p>
        </div>
    </div>
  )
}

export default Footer
