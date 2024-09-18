import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/constants.js';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='contact' className='w-full  pt-7 mb-1 '>
     <div className="flex items-center text-center py-14 w-full bg-blue-800 
      flex-col flex-wrap mt-10 ">
        <h3 className="text-white text-2xl">
          New recipes sent directly to your inbox
        </h3>
        <p className="text-white text-base max-lg:hidden">Easy, elegant recipes you can make any day of the week.</p>
        <button className="bg-white text-black text-sm px-3 h-10 mt-5">SUBSCRIBE</button>
      </div>
      <div className='flex flex-col   bg-slate-50 px-6 py-5'>
            <Link href={"/"} className='font-black text-2xl mb-4'>
                RecipeHaven
            </Link>
            <p className='text-base text-slate'>
                Easy, elegant recipes you can make any day of the week.
            </p>
            <div className='flex flex-row flex-wrap justify-between gap-10 mt-5'>
                {
                    footerLinks.map((link, index) => (
                        <div key={index} className='flex flex-col gap-3'>
                            <p className='text-base '>{link.title}</p>
                            {link.name.one ? (
                                <>
                                <Link href={link.link.one} className='block text-sm hover:text-blue-300'>
                                    {link.name.one}
                                </Link>
                                <Link href={link.link.two} className='block text-sm hover:text-blue-300'>
                                    {link.name.two}
                                </Link>
                                </>
                            ) : (
                                <Link href={link.link} className='block text-sm hover:text-blue-300'>
                                {link.name}
                                </Link>
                            )}
                        </div>
                    ))
                }
                <div className='flex max-lg:w-full gap-16'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-base'>CONNECT</p>
                        <div className='flex flex-row gap-4'>
                            <FaTwitter fontSize={'26px'} cursor={'pointer'}/>
                            <FaInstagram  fontSize={'26px'} cursor={'pointer'}/>
                            <FaFacebook  fontSize={'26px'} cursor={'pointer'}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-base'>SIGN UP FOR THE NEWSLETTER</p>
                        <button type='button' className='text-white w-[230px] h-[30px] bg-black text-left pl-4 '>SUBSCRIBE</button>
                    </div>
                </div>
            </div>           
      </div>
      <div className='text-base bg-indigo-300 w-full h-8 text-left max-lg:pl-3 pl-10  '>
        &copy; 2024 RecipeHaven recipes
      </div>
    </footer>
  )
}

export default Footer