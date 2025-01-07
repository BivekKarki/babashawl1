import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state; // Passed from the category products page

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <div
        key={product.id}
        className="flex flex-col items-center w-64 shadow-lg rounded-lg overflow-hidden bg-white"
        onClick={() => handleProductClick(product)}
        >
        <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover"
        />
        <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            {/* <button className="bg-[#d2b48c] text-white py-2 px-4 rounded hover:bg-[#b68a60]">
            MORE
            </button> */}
        </div>
        </div>
      ) : (
        <p>No product data found for ID: {id}</p>
      )}
    </div>
  );
}

export default ProductDetail;
