import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: 'SHAWL',
      description: '6 Products',
      image: "/images/manequinn-shawl-removebg.png",
      route: '/shawls',
    },
    {
      id: 2,
      title: 'SCARF',
      description: '3 Products',
      image: "/images/Scarfs.jpg",
      route: '/scarfs',
    },
  ];

  return (
    <div  id='products' className='md:py-12'>
    <div className="py-8 px-4 md:px-32 md:py-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6 text-black">Our Products</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-full md:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => navigate(product.route)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-72 w-full object-scale-down"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurProducts;
