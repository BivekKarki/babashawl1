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
      <h2 className="text-3xl font-bold my-5 underline text-amber-700">Contact Us</h2>
      <div className="flex md:flex-row flex-col w-full h-full gap-3">
        <div className="w-full md:w-3/5 flex flex-col justify-start">
          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="Enter your name"
            className='border-2 border-solid border-gray-300 rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder="Enter your email"
            className='border-2 border-solid border-gray-300 rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="phonenumber">Phone Number</label>
            <input 
            type="number" 
            id="phonenumber" 
            name="phonenumber"
            placeholder="Enter your Phone Number"
            className='border-2 border-solid border-gray-300 rounded-md p-2'
            />
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <label htmlFor="content">Message</label>
            <textarea name="content" id="" cols="30" rows="5" placeholder='Enter Your Message' className='border-2 border-solid border-gray-300 rounded-md p-2'>
            </textarea>
          </div>

          <div className="flex flex-col gap-2 mx-10 mb-4">
            <button type="submit" className='border-2 border-solid border-amber-700 rounded-full p-2 font-bold bg-amber-700  hover:text-amber-700 hover:bg-white'>Submit</button>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-start m-2">
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
                    +977 9810900000
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <LiaFaxSolid className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="flex flex-col ">
                  <span className=" text-base font-bold leading-tight tracking-tight">
                    Fax
                  </span>
                  <Link href="tel:9802993123" className=" text-sm font-normal">
                    03 5432 1234
                  </Link>
                </div>
              </div>

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
                    babashawl@gmail.com
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
                <h3 className="text-lg mb-2">Follow us:</h3>
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
                    <span className="sr-only"> Instagram </span>
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
                    className="w-full h-64"
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
