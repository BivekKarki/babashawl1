import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: 'SHAWL',
      description: 'This is a beautiful shawl made from premium materials.',
      image: 'https://s3-alpha-sig.figma.com/img/487e/1c39/6c11b7cabc3baca5190a0abd149dd8c3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2jrl8BBIquV2077tlAzbQWXAAD2wrHUVcu1-yvKaZIUDLj6bFY9HxnhbxRBBybW351wvSHqxaSa7OeRP-A1gmJXY71uvg5jZ9Bv4gxicJp1H9joaFUwbfJ3zHk~HYhd0NS04aYngg284MjeEZQbKKgefqxAHH35zTi~0Uqn86n7vaMg-hbcgWxtoHADjM8scstzIptHzCRYbedpT86XImJJ0Ax2fTHA5yORB2kFXTPNVRAcv8x9lyx7km6ixrnNCt1CwQbAg8slm9M812bQ2JBAJQjSXm6CGAykWUjaWMBfzxT-WbNO1MJ7EemWpTu2u8W1At0JQVGlFfEgGBcvTg__',
    },
    {
      id: 2,
      title: 'SCARF',
      description: 'This is a stylish scarf perfect for any occasion.',
      image: 'https://s3-alpha-sig.figma.com/img/487e/1c39/6c11b7cabc3baca5190a0abd149dd8c3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2jrl8BBIquV2077tlAzbQWXAAD2wrHUVcu1-yvKaZIUDLj6bFY9HxnhbxRBBybW351wvSHqxaSa7OeRP-A1gmJXY71uvg5jZ9Bv4gxicJp1H9joaFUwbfJ3zHk~HYhd0NS04aYngg284MjeEZQbKKgefqxAHH35zTi~0Uqn86n7vaMg-hbcgWxtoHADjM8scstzIptHzCRYbedpT86XImJJ0Ax2fTHA5yORB2kFXTPNVRAcv8x9lyx7km6ixrnNCt1CwQbAg8slm9M812bQ2JBAJQjSXm6CGAykWUjaWMBfzxT-WbNO1MJ7EemWpTu2u8W1At0JQVGlFfEgGBcvTg__',
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center text-2xl font-bold">Product Not Found</h1>;
  }

  return (
    <div className="py-8 px-4 md:py-24 md:px-16 bg-white">
      <div className="flex flex-wrap gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-black">{product.title}</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
