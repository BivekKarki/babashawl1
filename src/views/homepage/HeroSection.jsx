import React from 'react'

const HeroSection = () => {
  return (
    <div className=''>
    <div className="flex flex-col sm:flex-row gap-4 md:gap-0 justify-between items-center bg-[#d2b48c] px-4 md:px-24 py-8 md:py-0  relative">
      {/* Text Container */}
      <div className=" md:w-2/3 ">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4">
          <span className='text-4xl md:text-8xl font-semibold'>Shawls</span> <br />for Every Season
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6 md:w-3/4">
          Fashion plays an important role in people's lives. The way people dress expresses their individuality and personality. Supplying the finest shawls to retailers across the country.
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-[#9B7E5C] text-white py-3 px-6 rounded font-semibold hover:bg-[#7a4f31] transition">
            View Products
          </button>
          
        </div>
      </div>

      {/* Image Container */}
      <div className="">
      <div className="">
        <img
          src="https://s3-alpha-sig.figma.com/img/3792/894d/6f8aa076c8032a39c43e0d05be04fc48?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JV1hd7hxF2fXLf1iAGR7kggUZtIgm7hGIWT~Xa2V6W9wgjBy4TAuRFFN-i9xMdmwlJvospqfSnQXcsgBgu4v8uFWqgM8D3bNNnCRL9WkxMnx6oxnrl7Lc7XH2nmlX4cwJLIWInIEaQh7~Aa2b~4SmdP0Z~iLTemSeUF0RMDNkmjnstUFEqBCm3MeKDbnxv4~IkOwHBgwKNETi5hb4PePxd-hKcTRbGCJiH1JtfXK49qlyEexRMHir2qxsuZOslNIwgJfqTK7vUyv7f9unjPp8xF1~zEtxR-iZABJPEZLcz8Uaf96-fNeGs~Xu-5Dv00nJMeqjmA4Ii0~jpwNzOaosg__"
          alt="Shawl Display"
          className="w-full max-w-sm rounded-lg"
        />
      </div>

    </div>
      </div>
    </div>
  )
}

export default HeroSection;
