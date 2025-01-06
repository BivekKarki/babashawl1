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
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </>
      ) : (
        <p>No product data found for ID: {id}</p>
      )}
    </div>
  );
}

export default ProductDetail;
