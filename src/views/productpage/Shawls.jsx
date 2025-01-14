import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShawlProducts() {
  const navigate = useNavigate();
  const cat = 'shawls';
  const shawlProducts = [
    {
      id: 1,
      name: 'Large Check Shawl',
      tags: ['winter'],
      images: [
        '/images/check-shawl.jpg',
        '/images/check-shawl-2.jpg',
        '/images/check-shawl-1.jpg',
        '/images/check-shawl-3.jpg',
      ],
      description: 'A cozy scarf for chilly winter days.',
      material: 'Wool',
    },
    {
      id: 2,
      name: 'Check Shawl',
      tags: ['summer'],
      images: [
        '/images/bb-check.png',
        '/images/bb-check-1.jpg',
        // 'https://th.bing.com/th/id/OIP.vpjuSKE3fGHs6B5oIte4XgHaJ4?w=660&h=880&rs=1&pid=ImgDetMain',
        // 'https://i.etsystatic.com/5970624/r/il/8d7140/1522902789/il_fullxfull.1522902789_7wky.jpg',
      ],
      description: 'A lightweight hat to keep you cool during summer.',
      material: 'Cotton',
    },
    {
      id: 3,
      name: 'Flower Patterned Shawl(Gold)',
      tags: ['summer'],
      images: [
        '/images/nk-j-gold.jpg',
        '/images/nk-j-gold-1.jpg',
        '/images/nk-j-gold-2.jpg',
        // 'https://i.etsystatic.com/5970624/r/il/8d7140/1522902789/il_fullxfull.1522902789_7wky.jpg',
      ],
      description: 'A lightweight hat to keep you cool during summer.',
      material: 'Cotton',
    },
    {
      id: 4,
      name: 'Flower Patterned Shawl',
      tags: ['Winter'],
      images: [
        '/images/nk-j.jpg',
        '/images/nk-j-1.jpg',
        '/images/nk-j-2.jpg',
        '/images/nk-j-3.jpg',
      ],
      description: 'A lightweight hat to keep you cool during summer.',
      material: 'Cotton',
    },
    {
      id: 5,
      name: 'Flower Patterned Shawl(Red)',
      tags: ['summer'],
      images: [
        '/images/shawl-flower-1.jpg',
        '/images/shawl-flower-2.jpg',
        // '/images/nk-j-2.jpg',
        // 'https://i.etsystatic.com/5970624/r/il/8d7140/1522902789/il_fullxfull.1522902789_7wky.jpg',
      ],
      description: 'A lightweight hat to keep you cool during summer.',
      material: 'Cotton',
    },
    {
      id: 6,
      name: 'Jumbo',
      tags: ['Wnter'],
      images: [
        '/images/jumbo.jpg',
        '/images/jumbo-1.jpg',
        '/images/jumbo-2.jpg',
        '/images/jumbo-3.jpg',
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
