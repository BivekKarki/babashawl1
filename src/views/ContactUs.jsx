import React from 'react'
import { LiaFaxSolid, LiaPhoneVolumeSolid } from 'react-icons/lia'
import { MdOutlineEmail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  return (
    <>
    <div className='mx-4 sm:mx-0'>
    <div className="w-full md:w-1/2 flex flex-col mx-auto items-center my-10 py-5 border-2 border-solid border-gray-300 rounded-xl">
      <h2 className="text-3xl font-bold my-5 underline text-[#d2b48c]">Contact Us</h2>
      <div className="flex md:flex-row flex-col w-full h-full gap-3">
        <div className="w-full md:w-3/5 flex flex-col justify-start">
          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="Enter your name"
            className='border-2 border-solid border-[#d2b48c] rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder="Enter your email"
            className='border-2 border-solid border-[#d2b48c] rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="phonenumber">Phone Number</label>
            <input 
            type="number" 
            id="phonenumber" 
            name="phonenumber"
            placeholder="Enter your Phone Number"
            className='border-2 border-solid border-[#d2b48c] rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="content">Message</label>
            <textarea name="content" id="" cols="30" rows="5" placeholder='Enter Your Message' className='border-2 border-solid border-[#d2b48c] rounded-md p-2'>
            </textarea>
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <button type="submit" className='border-2 border-solid border-[#d2b48c] text-white rounded-full p-2 font-bold bg-[#d2b48c] hover:text-[#d2b48c] hover:bg-white'>Submit</button>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-start px-4">
          {/* <div className="flex flex-col gap-2 mx-10 mb-4">
            <div className="flex gap-2">
              <p>Byashi, Bhaktapur, Nepal</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <div className="flex gap-2">
              <p>9810900000</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <div className="flex gap-2">
              <p>babashawl@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <div className="flex gap-2">
              <p>whatsapp, Facebook</p>
            </div>
          </div> */}



          <div className="contact-content mt-8  flex flex-col gap-4">
              <div className="flex gap-4">
                <LiaPhoneVolumeSolid className="w-5 h-5 sm:w-7 sm:h-7" />
                <div className="flex flex-col ">
                  <span className=" text-base font-bold leading-tight tracking-tight">
                    Phone
                  </span>
                  <Link href="tel:9810900000" className=" text-sm font-normal">
                    +977 9851113949
                  </Link>
                </div>
              </div>

              {/* <div className="flex gap-4">
                <LiaFaxSolid className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="flex flex-col ">
                  <span className=" text-base font-bold leading-tight tracking-tight">
                    Fax
                  </span>
                  <Link href="tel:9802993123" className=" text-sm font-normal">
                    03 5432 1234
                  </Link>
                </div>
              </div> */}

              <div className="flex gap-4">
                <MdOutlineEmail className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="flex flex-col ">
                  <span className=" text-base font-bold leading-tight tracking-tight">
                    Email
                  </span>
                  <Link
                    href="mailto:info@babashawl@gmail.com"
                    className=" text-sm font-normal"
                  >
                    sbfi2071@hotmail.com
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <SlLocationPin className="w-5 h-5 sm:w-7 sm:h-7" />
                <div className="flex flex-col ">
                  <span className=" text-base font-bold leading-tight tracking-tight">
                    Location
                  </span>
                  <Link
                    href="https://maps.app.goo.gl/shJR4SfEK6nurzGs7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-sm font-normal"
                  >
                    Byashi, Bhaktapur, Nepal
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg mb-2">Contact us:</h3>
                <div className="flex space-x-4">
                  <Link
                    href=""
                    className="hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Facebook </span>
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Whatsapp </span>
                    <svg 
                      className="w-6 h-6 sm:w-8 sm:h-8"  
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                          clipRule="evenodd"
                        />
                    </svg>

                  </Link>
                  <Link
                    href=""
                    className="hover:opacity-75 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Linkedin </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8">
                  <iframe
                    className="md:w-full h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.622250672471!2d85.42702550833931!3d27.673728066889957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b43070c0f41%3A0x56071a91a2a855f2!2sShiva%20Baba%20Fabric%20Private%20Limited!5e0!3m2!1sen!2snp!4v1736011282818!5m2!1sen!2snp"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default ContactUs
