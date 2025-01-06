import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: 'SHAWL',
      description: 'Body text.',
      image: "https://s3-alpha-sig.figma.com/img/487e/1c39/6c11b7cabc3baca5190a0abd149dd8c3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2jrl8BBIquV2077tlAzbQWXAAD2wrHUVcu1-yvKaZIUDLj6bFY9HxnhbxRBBybW351wvSHqxaSa7OeRP-A1gmJXY71uvg5jZ9Bv4gxicJp1H9joaFUwbfJ3zHk~HYhd0NS04aYngg284MjeEZQbKKgefqxAHH35zTi~0Uqn86n7vaMg-hbcgWxtoHADjM8scstzIptHzCRYbedpT86XImJJ0Ax2fTHA5yORB2kFXTPNVRAcv8x9lyx7km6ixrnNCt1CwQbAg8slm9M812bQ2JBAJQjSXm6CGAykWUjaWMBfzxT-WbNO1MJ7EemWpTu2u8W1At0JQVGlFfEgGBcvTg__",
      route: '/shawls',
    },
    {
      id: 2,
      title: 'SCARF',
      description: 'Body text.',
      image: "https://s3-alpha-sig.figma.com/img/487e/1c39/6c11b7cabc3baca5190a0abd149dd8c3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2jrl8BBIquV2077tlAzbQWXAAD2wrHUVcu1-yvKaZIUDLj6bFY9HxnhbxRBBybW351wvSHqxaSa7OeRP-A1gmJXY71uvg5jZ9Bv4gxicJp1H9joaFUwbfJ3zHk~HYhd0NS04aYngg284MjeEZQbKKgefqxAHH35zTi~0Uqn86n7vaMg-hbcgWxtoHADjM8scstzIptHzCRYbedpT86XImJJ0Ax2fTHA5yORB2kFXTPNVRAcv8x9lyx7km6ixrnNCt1CwQbAg8slm9M812bQ2JBAJQjSXm6CGAykWUjaWMBfzxT-WbNO1MJ7EemWpTu2u8W1At0JQVGlFfEgGBcvTg__",
      route: '/scarfs',
    },
  ];

  return (
    <div className="py-8 px-4 md:py-24 md:px-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6 text-black">Our Products</h2>
      <div className="flex flex-wrap justify-between gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-full md:w-[48%] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => navigate(product.route)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
