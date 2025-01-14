import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScarfProducts() {
  const navigate = useNavigate();
  const cat = 'scarfs';
  const scarfProducts = [
    {
      id: 1,
      name: 'Check Scarf',
      tags: ['winter'],
      images: [
        '/images/check-scarf-1.jpg',
        '/images/check-scarf.jpg',
      ],
      description: 'A cozy scarf for chilly winter days.',
      material: 'Wool',
    },
    {
      id: 2,
      name: 'Sitara Scarf',
      tags: ['summer'],
      images: [
        '/images/sitara-scarf.jpg',
        '/images/sitara-scarf-1.jpg',
        '/images/sitara-scarf-2.jpg',
        '/images/sitara-scarf-3.jpg',
      ],
      description: 'A lightweight scarf to keep you cool during summer.',
      material: 'Cotton',
    },
    {
      id: 2,
      name: 'Embroidery Scarf',
      tags: ['summer'],
      images: [
        '/images/Emb-scarf.jpg',
        '/images/Emb-scarf-1.jpg',
      ],
      description: 'A lightweight scarf to keep you cool during summer.',
      material: 'Cotton',
    },

  ];

  const handleProductClick = (product) => {
    navigate(`/${cat}/${product.id}`, { state: product });
  };

  return (
    <div className="py-4 px-4 md:py-10 md:px-16 bg-white">
      <h1 className="text-center text-4xl font-bold mb-6 text-black">Scarfs</h1>
      <div className="flex flex-wrap justify-center gap-12">
        {scarfProducts.map((product) => (
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

export default ScarfProducts;
