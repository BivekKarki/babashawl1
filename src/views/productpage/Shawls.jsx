import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShawlProducts() {
  const navigate = useNavigate();
  const cat = 'shawls';
  const shawlProducts = [
    {
      id: 1,
      name: 'Winter Scarf',
      tags: ['winter'],
      images: [
        'https://th.bing.com/th/id/OIP.7Eud56b-KqLkVoMsSSh5NAHaHZ?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.ZS-Vp_wqN78V8p8wmFrhZgHaIc?w=800&h=912&rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.vpjuSKE3fGHs6B5oIte4XgHaJ4?w=660&h=880&rs=1&pid=ImgDetMain',
        'https://i.etsystatic.com/5970624/r/il/8d7140/1522902789/il_fullxfull.1522902789_7wky.jpg',
      ],
      description: 'A cozy scarf for chilly winter days.',
      material: 'Wool',
    },
    {
      id: 2,
      name: 'Summer Hat',
      tags: ['summer'],
      images: [
        'https://th.bing.com/th/id/OIP.FUcqXO-R3cKXDMojESx2KgHaFU?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.Fbnkilv75GZ_-b4I6sHaewHaHa?w=500&h=500&rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.4c6bf5bdd3fc1551de783d0d5e2a4db5?rik=%2f%2fN%2fyVaiCv5Miw&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.Gl52f-w9DSOfP6vfoGo_IAAAAA?w=312&h=416&rs=1&pid=ImgDetMain',
      ],
      description: 'A lightweight hat to keep you cool during summer.',
      material: 'Cotton',
    },

  ];

  const handleProductClick = (product) => {
    navigate(`/${cat}/${product.id}`, { state: product });
  };

  return (
    <div className="py-4 px-4 md:py-10 md:px-16 bg-white">
      <h1 className="text-center text-4xl font-bold mb-6 text-black">Shawls</h1>
      <div className="flex flex-wrap justify-center gap-12">
        {shawlProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-64 shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShawlProducts;
