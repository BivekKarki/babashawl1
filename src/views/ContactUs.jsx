import React from 'react'
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
            <button type="submit" className='border-2 border-solid border-amber-700 rounded-full p-2 font-bold bg-amber-700 text-white hover:text-amber-700 hover:bg-white'>Submit</button>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-start m-2">
          <div className="flex flex-col gap-2 mx-10 mb-4">
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
          </div>

          {/* <div className="flex flex-col gap-2 mx-10 mb-4">
            <div className="flex gap-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.378362118606!2d85.41983778709191!3d27.67469846558125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1abad9ad2485%3A0xec16336929066d21!2sBhaktapur%2044800!5e0!3m2!1sen!2snp!4v1735983816453!5m2!1sen!2snp" width="200" height="250" style="border:0;" loading="lazy"></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default ContactUs
