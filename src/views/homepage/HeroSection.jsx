import React from 'react'

const HeroSection = () => {
  return (
    <div>
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#d2b48c] p-8 font-serif relative">
      {/* Text Container */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Shawls for Every Season
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Fashion plays an important role in people's lives. The way people dress expresses their individuality and personality. Supplying the finest shawls to retailers across the country.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-[#8b5e3c] text-white py-2 px-6 rounded font-bold hover:bg-[#7a4f31] transition">
            Shop now
          </button>
          <button className="bg-white border border-black text-black py-2 px-6 rounded font-bold hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="mt-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/3792/894d/6f8aa076c8032a39c43e0d05be04fc48?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JV1hd7hxF2fXLf1iAGR7kggUZtIgm7hGIWT~Xa2V6W9wgjBy4TAuRFFN-i9xMdmwlJvospqfSnQXcsgBgu4v8uFWqgM8D3bNNnCRL9WkxMnx6oxnrl7Lc7XH2nmlX4cwJLIWInIEaQh7~Aa2b~4SmdP0Z~iLTemSeUF0RMDNkmjnstUFEqBCm3MeKDbnxv4~IkOwHBgwKNETi5hb4PePxd-hKcTRbGCJiH1JtfXK49qlyEexRMHir2qxsuZOslNIwgJfqTK7vUyv7f9unjPp8xF1~zEtxR-iZABJPEZLcz8Uaf96-fNeGs~Xu-5Dv00nJMeqjmA4Ii0~jpwNzOaosg__"
          alt="Shawl Display"
          className="w-full max-w-sm rounded-lg"
        />
      </div>

    </div>

    </div>
  )
}

export default HeroSection
