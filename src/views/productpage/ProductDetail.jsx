import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  console.log(product);

  return (
    <div className="py-8 px-4 md:px-16 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {product?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product?.name} - ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product?.name}</h1>
          <div className="mb-4">
            {/* {product?.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded mr-2"
              >
                {tag}
              </span>
            ))} */}
          </div>
          <p className="text-gray-600 mb-6">{product?.description}</p>
          <div className="bg-white p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Material</h3>
            <p className="text-gray-700">{product?.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
