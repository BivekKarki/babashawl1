import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  console.log(product);

  return (
    <div className="px-4 md:px-24 py-24  bg-gray-50">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">

        <div className="flex flex-col items-center">
      <div className="w-full h-60 md:w-80 md:h-80 max-w-md">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-full object-contain rounded-lg shadow-md"
        />
      </div>
      {/* ======================== thumbnail ====================================== */}
      <div className="flex mt-4 gap-4">
        {product?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border-2 ${
              selectedImage === image
                ? "border-blue-500"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>

        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product?.name}</h1>
          <div className="mb-4">
            {product?.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="bg-white p-4 border rounded-lg shadow-md">
            <div className='flex items-center mb-4'>
              <h3 className="text-lg font-semibold ">Material : </h3>
              <p className="text-gray-700 pl-2"> {product?.material}</p>
            </div>
            
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="text-gray-700">{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
