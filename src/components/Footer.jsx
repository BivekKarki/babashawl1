import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div>
      <footer className="bg-[#d2b48c] text-white overflow-x-hidden ">
        <div className="mx-auto w-full sm:px-16 p-4 py-6 lg:py-16">
          
            <div className="grid grid-cols-1 gap-6 sm:max-md:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 ">
                <div className="mb-6 md:mb-0 flex flex-col  lg:col-span-3">
                <div><img src='/images/LogoName.png' alt='' className='w-1/3 ' /><h2 className="text-3xl font-bold">Shiva Baba Fabric</h2></div>
                {/* <p className=" mt-4 text-base capitalize font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet 
                    lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. 
                    </p> */}
                    <div className="flex mt-8 space-x-6 ">
                    <Link href="https://www.facebook.com/kalodhungasolution"  className="hover:text-KPrimary"  target="_blank" rel="noreferrer">
                        <span className="sr-only"> Facebook </span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link href="" className="hover:text-KPrimary"  target="_blank" rel="noreferrer">
                        <span className="sr-only"> Whatsapp </span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    {/* <Link href="https://www.linkedin.com/company/kalodhunga-solution/posts" className="hover:text-KPrimary "  target="_blank" rel="noreferrer">
                        <span className="sr-only"> Linkedin </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                        </svg>
                        
                    </Link> */}

                    </div>
                    
                </div>
                <div className='hidden lg:flex lg:col-span-1'></div>

                <div className='lg:col-span-2'>
                    <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Products</h2>
                    <div className="flex flex-col mt-8 gap-4 text-sm ">
                        <Link href="/" className="hover:text-KPrimary text-base" > Shawl</Link>
                        <Link href="/services" className="hover:text-KPrimary text-base" > Scarf</Link>
                        {/* <Link href="/about-us" className="hover:text-KPrimary text-base" > Winter </Link>
                        <Link href="/faq" className="hover:text-KPrimary text-base" > All Season </Link> */}
                    </div>
                </div>

                <div className='lg:col-span-2'>
                    <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Quick Links</h2>
                    <div className="flex flex-col mt-8 gap-4 text-sm ">
                        <Link href="/" className="hover:text-KPrimary text-base" > About</Link>
                        <Link href="/faq" className="hover:text-KPrimary text-base" > FAQs </Link>
                        {/* <Link href="/projects" className="hover:text-KPrimary text-base" > Terms & Conditions</Link> */}
                        <Link href="/contact-us" className="hover:text-KPrimary text-base" > Contact Us </Link>
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Contact Info</h2>
                    <div className="flex flex-col mt-8 gap-4 text-sm ">
                <p className=" flex flex-row items-center gap-2 ">
                
                    <MdLocationOn className='text-xl min-w-5' />
                    <Link
                    // href="https://maps.app.goo.gl/HJf1ZJ2PriqAppSp7"
                    // target="_blank"
                    rel="noopener noreferrer"
                        className="underline  hover:text-KPrimary text-base"
                    >
                        {" "}
                        Byashi, Bhaktapur, Nepal
                    </Link>
                    </p>
                <p className=" flex flex-row items-center gap-2 ">
                    <IoMail className='text-xl min-w-5' />
                    <Link
                        href="mailto:sbfi2071@hotmail.com"
                        className="underline  hover:text-KPrimary text-base"
                    >
                        {" "}
                        sbfi2071@hotmail.com
                    </Link>
                    </p>
                <p className=" flex flex-row items-center gap-2 ">
                    <FaPhoneAlt className='text-xl min-w-5' />
                    <Link
                        // href="tel:9846605866"
                        className="underline  hover:text-KPrimary text-base"
                    >
                        {" "}
                        9851113949
                    </Link>
                    </p>
                    
                </div>
                </div>
            </div>
    </div>
</footer>

<div className='bg-white w-full flex justify-center items-center px-4 mx-auto sm:px-6 lg:px-8'>
          <p className="text-lg font-bold md:text-lg py-2 flex items-center text-KSecondary">
          2022 - 2024 © Shiva Baba Fabric, All rights reserved. 
          </p>
        </div>

    </div>
    </>
    );
};

export default Footer;
