import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Weaving",
      image: "/images/weaving.jpg",
    },
    {
      id: 2,
      title: "Dyeing",
      image: "/images/weaving.jpg",
    },
    {
      id: 3,
      title: "Printing",
      image: "/images/weaving.jpg",
    },
    {
      id: 4,
      title: "Raging",
      image: "/images/raging.jpg",
    },
  ];

  return (
    <div id='services' className='py-12'>
    <div className="px-4 md:px-24 py-12 bg-[#d2b48c]">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-72 shadow-lg rounded-lg overflow-hidden bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {/* <button className="bg-[#d2b48c] text-white py-2 px-4 rounded hover:bg-[#b68a60]">
                MORE
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurServices;
