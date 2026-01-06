import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='mb-20 sm:mb-30'>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-y-12 w-[80%] mx-auto '>

        <div>
            <h2 className='text-lg sm:text-xl font-bold'>Get In Touch</h2>

            <p className='my-4 text-sm sm:text-base'>The quick brown fox jumps over the lazy dog</p>

            <div className='flex items-center text-primary gap-4 text-2xl'>
                <FaFacebook className='cursor-pointer'/>
                <FaInstagram className='cursor-pointer' />
                <FaTwitter className='cursor-pointer'  />
            </div>
        </div>

        <div>
            <h2 className='text-lg sm:text-xl font-bold mb-2'>Company info</h2>

            <ul className='flex flex-col gap-2 font-bold text-sm sm:text-base'>
                <li>About Us</li>
                <li>Career</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
        </div>

        <div>
            <h2 className='text-lg sm:text-xl font-bold mb-2'>Features</h2>

            <ul className='flex flex-col gap-2 font-bold text-sm sm:text-base'>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
            </ul>
        </div>

            <div>
                <h2 className='text-lg sm:text-xl font-bold mb-2'>Resources</h2>

                <ul className='flex flex-col gap-2 font-bold text-sm sm:text-base'>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
            </div>

        </div>
    </section>
  )
}

export default Footer